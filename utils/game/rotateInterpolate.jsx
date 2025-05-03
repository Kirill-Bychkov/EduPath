export const getRotateInterpolate = (value) => {
    return value.interpolate({
        inputRange: [-Math.PI, Math.PI],
        outputRange: [`${-Math.PI}rad`, `${Math.PI}rad`]
    });
};
