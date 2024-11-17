import React from "react";
import { StyleSheet, Animated } from "react-native";
import { useLoadingEffect } from "../components/game/useLoadingEffect.jsx";
import { icons } from "../constants/icons.js";
import { Image } from "expo-image";

const LoadingScreenGame = ({ visible }) => {
    const { opacity, isRendering, showGif } = useLoadingEffect(visible);

    if (!isRendering) return null;

    return (
        <Animated.View style={[styles.animatedView, { opacity }]}>
            {showGif && (
                <Image
                    style={styles.animation}
                    source={icons.loadingHedgehog}
                />
            )}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    animatedView: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    animation: {
        width: 108,
        height: 108
    }
});

export default LoadingScreenGame;
