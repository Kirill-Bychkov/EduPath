import { Animated } from "react-native";

export const fadeIn = (animationValue, duration = 500) => {
    return Animated.timing(animationValue, {
        toValue: 1,
        duration,
        useNativeDriver: true,
    });
};

export const fadeOut = (animationValue, duration = 500) => {
    return Animated.timing(animationValue, {
        toValue: 0,
        duration,
        useNativeDriver: true,
    });
};
