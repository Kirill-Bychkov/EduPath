export const rotateInterpolate = (value) => {
    return value.interpolate({
        inputRange: [-Math.PI, Math.PI],
        outputRange: [`${-Math.PI}rad`, `${Math.PI}rad`]
    });
};
