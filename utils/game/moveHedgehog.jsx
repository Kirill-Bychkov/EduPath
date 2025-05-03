import { Animated } from "react-native";

export const goTo = (fromTop, fromLeft, toTop, toLeft, duration = 500) => {
  return new Promise((resolve) => {
    const moveTop = Animated.timing(fromTop, {
      toValue: toTop,
      duration,
      useNativeDriver: true
    });

    const moveLeft = Animated.timing(fromLeft, {
      toValue: toLeft,
      duration,
      useNativeDriver: true
    });
    
    Animated.sequence([moveTop, moveLeft]).start(resolve);
  });
};

export const turnTo = (fromRotate, toAngle, duration = 300) => {
  return new Promise((resolve) => {
    Animated.timing(fromRotate, {
      toValue: toAngle,
      duration,
      useNativeDriver: true
    }).start(resolve);
  });
};

export const createMove = (y, x, rotate) => async (
  newY,
  newX,
  angle
) => {
  await turnTo(rotate, angle);
  await goTo(y, x, newY, newX);
};
