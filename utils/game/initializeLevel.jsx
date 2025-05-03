import { Animated } from "react-native";

const opacityKeys = [
  "portalOpacities",
  "appleOpacities",
  "mushroomOpacities",
  "stoneOpacities",
  "questionOpacities",
  "ripOpacities"
];

export const initializeLevel = (initialGrid) => {
  let hedgehog = {
    top: null,
    left: null,
    rotate: new Animated.Value(0),
    opacity: new Animated.Value(1)
  };

  const other = {
    foodBacklightScreenOpacity: new Animated.Value(0),
    growRotate: new Animated.Value(0),
    ...opacityKeys.reduce((acc, key) => {
      acc[key] = {};
      return acc;
    }, {})
  };

  for (const row of initialGrid) {
    for (const cell of row) {
      for (const obj of cell.objs) {
        if (obj === "empty") break;
        
        if (obj === "hedgehog") {
          hedgehog.top = new Animated.Value(cell.top);
          hedgehog.left = new Animated.Value(cell.left);
          break;
        }

        const nameOpacity = `${obj}Opacities`;
        if (!other[nameOpacity][cell.id]) {
          other[nameOpacity][cell.id] = new Animated.Value(
            obj === "rip" ? 0 : 1
          );
        }
      }
    }
  }

  return { hedgehog, other };
};
