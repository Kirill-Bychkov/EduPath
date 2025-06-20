import { Animated } from "react-native";
import { memo } from "react";

const AnimatedImageCustom = memo(({ item }) => {
    const { source, ...rest } = item;

    return <Animated.Image source={source} style={rest} />;
});

export default AnimatedImageCustom;
