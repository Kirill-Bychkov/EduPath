import React from "react";
import { StyleSheet, Animated } from "react-native";
import { useEffectLoading } from "../components/game/useEffectLoadingScreen.jsx";
import { Image } from "expo-image";

const LoadingScreenGame = ({ visible }) => {
    const { data, opacity, isRendering, showGif } = useEffectLoading(visible);

    if (!isRendering) return null;

    return (
        <Animated.View style={[styles.animatedView, { opacity }]}>
            {showGif && (
                <Image
                    width={data.gif.loadingHedgehog.width}
                    height={data.gif.loadingHedgehog.height}
                    source={data.gif.loadingHedgehog.source}
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
    }
});

export default LoadingScreenGame;
