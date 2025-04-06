import { StyleSheet, Animated } from "react-native";
import { Image } from "expo-image";
import { useLoadingScreen } from "../../hooks/game/useLoadingScreen";
import { imgGame } from "../../config"
import { COLORS } from "../../constants";

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
        backgroundColor: COLORS.GAME.animation.background
    },
    image: {
        width: imgGame.animations.anim_hedgehog.width,
        height: imgGame.animations.anim_hedgehog.height
    }
});

export default LoadingScreen;
