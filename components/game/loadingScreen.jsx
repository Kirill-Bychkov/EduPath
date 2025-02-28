import React from "react";
import { StyleSheet, Animated } from "react-native";
import { useLoadingScreen } from "../../hooks/game/useLoadingScreen";
import { Image } from "expo-image";
import { COLORS } from "../../constants";
import { imgGame } from "../../config"

const LoadingScreen = ({ visible }) => {
    const { opacity, isRendering, showGif } = useLoadingScreen(visible);

    if (!isRendering) return null;

    return (
        <Animated.View style={[styles.animatedView, { opacity }]}>
            {showGif && (
                <Image
                    source={imgGame.animations.anim_hedgehog.source}
                    style={styles.image}
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
        backgroundColor: COLORS.GAME.animation.background,
    },
    image: {
        width: imgGame.animations.anim_hedgehog.width,
        height: imgGame.animations.anim_hedgehog.height
    }
});

export default LoadingScreen;
