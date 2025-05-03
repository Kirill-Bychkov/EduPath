import { useRef, useEffect, useCallback, useState } from "react";
import { Hedgehog } from "../../libraries";
import { HedgehogRuntime } from "../../utils/game/hedgehogRuntime";
import { initializeLevel } from "../../utils/game/initializeLevel";
import { createMove } from "../../utils/game/moveHedgehog";
import { createDeath, eatIt, teleport } from "../../utils/game/fadeAnimations";
import { deepCopy } from "../../utils/deepCopy";

export const useLevelGame = (initialGrid, openWindowModal) => {
  const scrollViewRef = useRef(null);
  const interpreterRef = useRef(null);

  const levelAnimationsRef = useRef(initializeLevel(initialGrid));
  const getLevelAnimations = useCallback(() => levelAnimationsRef.current, []);

  const [grid, setGrid] = useState(deepCopy(initialGrid));

  const [foodBacklightVisible, setFoodBacklightVisible] = useState(false);
  const foodRef = useRef("");

  useEffect(() => {
    Hedgehog.setConfig({
      grid,
      setGrid,

      onMove: async (top, left, angle) => {
        await createMove(
          getLevelAnimations().hedgehog.top,
          getLevelAnimations().hedgehog.left,
          getLevelAnimations().hedgehog.rotate
        )(top, left, angle);
      },

      onPortal: async (top, left) => {
        await teleport(
          getLevelAnimations().hedgehog.top,
          getLevelAnimations().hedgehog.left,
          getLevelAnimations().hedgehog.opacity
        )(top, left);
      },

      onEat: async (nameOpacity, id, food) => {
        foodRef.current = food;
        setFoodBacklightVisible(true);

        await eatIt(
          getLevelAnimations().other.foodBacklightScreenOpacity,
          getLevelAnimations().other.growRotate,
          getLevelAnimations().other[`${nameOpacity}Opacities`][id]
        )();

        setFoodBacklightVisible(false);
        foodRef.current = "";
      },

      onStone: async (nameOpacity, id) => {
        await createDeath(
          getLevelAnimations().other.ripOpacities[id],
          getLevelAnimations().hedgehog.opacity,
          getLevelAnimations().other[`${nameOpacity}Opacities`][id]
        )();

        openWindowModal("message", "stone");
      },

      onBorder: async (id) => {
        await createDeath(
          getLevelAnimations().other.ripOpacities[id],
          getLevelAnimations().hedgehog.opacity
        )();
        
        openWindowModal("message", "border");
      }
    });
  }, []);

  const handleScroll = useCallback((event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY < 0) {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }
  }, []);

  const runCode = useCallback(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });

    HedgehogRuntime.clear();

    setGrid(deepCopy(initialGrid));
    levelAnimationsRef.current = initializeLevel(initialGrid);
    
    interpreterRef.current?.runUserCode();
  }, []);

  return {
    scrollViewRef,
    interpreterRef,
    handleScroll,
    runCode,
    getLevelAnimations,
    grid,
    foodBacklightVisible,
    foodRef
  };
};
