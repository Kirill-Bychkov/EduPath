import { useRef, useEffect, useCallback, useState } from "react";
import { HedgehogBack } from "../../utils/game/hedgehogBack";
import { HedgehogStorage } from "../../utils/game/hedgehogStorage";
import { initializeLevel } from "../../utils/game/initializeLevel";
import { move } from "../../utils/game/moveHedgehog";
import { teleport, erect, remove, shine } from "../../utils/game/fadeAnimations";
import { deepCopy } from "../../utils/deepCopy";

export const useLevelGame = (
  levelNumber,
  taskConditions,
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

  const isLevelPassedRef = useRef(false);

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
    if (!interpreterRef.current?.checkCodeInGame(taskConditions)) {
      openWindowModal(renderWindowReasons.task_failed);
      return;
    }

    scrollViewRef.current?.scrollTo({ y: 0, animated: true });

    setGrid(deepCopy(initialGrid));
    animationsRef.current = initializeLevel(initialGrid);

    HedgehogStorage.clear();
    HedgehogBack.resetQueue();
    isLevelPassedRef.current = false;
    
    interpreterRef.current?.runUserCode();

    HedgehogBack.getQueue().then(() => {
      const hasVisibleFood = grid.flat().some(cell => {
        if (cell.obj === "apple" || cell.obj === "mushroom") {
          const opacity = animations[`${cell.obj}Opacities`]?.[cell.id];
          return opacity?.__getValue?.() === 1;
        }
        return false;
      });

      if (hasVisibleFood) {
        return openWindowModal(renderWindowReasons.items_left);
      }

      isLevelPassedRef.current = true;
      const reason = levelNumber < Object.keys(taskConditions).length
        ? renderWindowReasons.level_passed
        : renderWindowReasons.game_over;
      
      openWindowModal(reason);
    });
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
    foodBacklightVisible,
    isLevelPassed: isLevelPassedRef.current
  };
};
