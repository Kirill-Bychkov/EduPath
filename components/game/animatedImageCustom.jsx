import { Animated } from "react-native";

const AnimatedImageCustom = ({ item }) => {
    const { source, ...rest } = item;

    return <Animated.Image source={source} style={rest} />;
};

export default AnimatedImageCustom;
