import { Animated } from "react-native";

export const initializeLevel = (initialGrid) => {
  let animations = {
    hedgehogTop: null,
    hedgehogLeft: null,
    hedgehogRotate: new Animated.Value(0),
    hedgehogOpacity: new Animated.Value(1),
    ripOpacity: new Animated.Value(0),
    foodBacklightScreenOpacity: new Animated.Value(0),
    growRotate: new Animated.Value(0),
    appleOpacities: {},
    mushroomOpacities: {},
    stoneOpacities: {},
    questionOpacities: {}
  };

  for (const row of initialGrid) {
    for (const cell of row) {
      if (cell.obj === "hedgehog") {
        animations.hedgehogTop = new Animated.Value(cell.top);
        animations.hedgehogLeft = new Animated.Value(cell.left);
        continue;
      }

      const nameOpacity = `${cell.obj}Opacities`;
      if (Object.hasOwn(animations, nameOpacity)) {
        animations[nameOpacity][cell.id] = new Animated.Value(1);
      }
    }
  }

  return animations;
};
