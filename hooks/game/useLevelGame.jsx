import { useRef, useEffect, useCallback, useState } from "react";
import { HedgehogBack } from "../../utils/game/hedgehogBack";
import { HedgehogStorage } from "../../utils/game/hedgehogStorage";
import { initializeLevel } from "../../utils/game/initializeLevel";
import { move } from "../../utils/game/moveHedgehog";
import { teleport, erect, remove, shine } from "../../utils/game/fadeAnimations";
import { deepCopy } from "../../utils/deepCopy";

export const useLevelGame = (
  initialGrid,
  openWindowModal,
  renderWindowReasons
) => {
  const scrollViewRef = useRef(null);
  const interpreterRef = useRef(null);

  const animationsRef = useRef(initializeLevel(initialGrid));
  const animations = new Proxy({}, {
    get(_, prop) {
      return animationsRef.current[prop];
    }
  });
  
  const [grid, setGrid] = useState(deepCopy(initialGrid));

  const foodRef = useRef("");
  const [foodBacklightVisible, setFoodBacklightVisible] = useState(false);

  useEffect(() => {
    HedgehogBack.setConfig({
      grid,
      setGrid,
      foodRef,
      setFoodBacklightVisible,

      onMovement: async (top, left, angle) => {
        await move(
          animations.hedgehogTop,
          animations.hedgehogLeft,
          animations.hedgehogRotate
        )(top, left, angle);
      },

      onTeleportation: async (top, left) => {
        await teleport(
          animations.hedgehogTop,
          animations.hedgehogLeft,
          animations.hedgehogOpacity
        )(top, left);
      },

      onDeathHedgehog: async () => {
        await remove(
          animations.hedgehogOpacity
        )();
      },

      onMonumentInstallation: async (reason) => {
        await erect(
          animations.ripOpacity
        )();
        openWindowModal(renderWindowReasons.incident_field, reason);
      },

      onCleaningCell: async (obj, id) => {
        await remove(
          animations[`${obj}Opacities`][id]
        )();
      },

      onBacklight: async () => {
        await shine(
          animations.foodBacklightScreenOpacity,
          animations.growRotate
        )();
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

    setGrid(deepCopy(initialGrid));
    animationsRef.current = initializeLevel(initialGrid);

    HedgehogStorage.clear();
    HedgehogBack.resetQueue();
    
    interpreterRef.current?.runUserCode();
  }, []);

  const clearCode = useCallback(() => {
    interpreterRef.current?.clearUserCode();
  }, []);

  const copyCode = useCallback(() => {
    interpreterRef.current?.copyUserCode();
  }, []);

  return {
    scrollViewRef,
    interpreterRef,
    handleScroll,
    runCode,
    clearCode,
    copyCode,
    animations,
    grid,
    foodRef,
    foodBacklightVisible
  };
};
