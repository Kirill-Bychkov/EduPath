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

export const teleport = (y, x, hedgehog) => async (
    newY,
    newX
) => {
    await fadeOut(hedgehog, 200);
    await goTo(y, x, newY, newX, 0);
    await fadeIn(hedgehog, 200);
};

export const erect = (rip) => async () => {
    await fadeIn(rip, 200);
};

export const remove = (obj) => async () => {
    await fadeOut(obj, 200);
};

export const shine = (
    foodBacklightScreenOpacity,
    growRotate
) => async () => {
    growRotate.setValue(0);
    await fadeIn(foodBacklightScreenOpacity);
    await turnTo(growRotate, 2 * Math.PI, 2000);
    await fadeOut(foodBacklightScreenOpacity);
};
