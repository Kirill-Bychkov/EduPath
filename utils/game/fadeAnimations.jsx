import { Animated } from "react-native";
import { goTo, turnTo } from "./moveHedgehog";

export const fadeIn = (value, duration = 500) => {
    return new Promise((resolve) => {
        Animated.timing(value, {
            toValue: 1,
            duration,
            useNativeDriver: true,
        }).start(resolve);
    });
};

export const fadeOut = (value, duration = 500) => {
    return new Promise((resolve) => {
        Animated.timing(value, {
            toValue: 0,
            duration,
            useNativeDriver: true,
        }).start(resolve);
    });
};

export const createDeath = (
    fadeInObject,
    ...fadeOutObjects
) => async () => {
    await Promise.all([
        ...fadeOutObjects.map(obj => fadeOut(obj, 200)),
        fadeIn(fadeInObject, 200)
    ]);
};

export const eatIt = (
    foodBacklightScreenOpacity,
    growRotate,
    foodObject
) => async () => {
    await fadeIn(foodBacklightScreenOpacity);
    growRotate.setValue(0);
    await turnTo(growRotate, 2 * Math.PI, 2000);
    await fadeOut(foodBacklightScreenOpacity);
    await fadeOut(foodObject, 200);
};

export const teleport = (y, x, hedgehog) => async (
    newY,
    newX
) => {
    await fadeOut(hedgehog, 200);
    await goTo(y, x, newY, newX, 0);
    await fadeIn(hedgehog, 200);
};
