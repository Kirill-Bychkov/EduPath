import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { fadeIn, fadeOut } from "../../utils/game/loadingAnimations";
import { setStatusBarStyle, setStatusBarBackgroundColor } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { COLORS } from "../../constants";

export const useLoadingScreen = (visible) => {
    const opacity = useRef(new Animated.Value(visible ? 1 : 0)).current;
    const [isRendering, setIsRendering] = useState(true);
    const [showGif, setShowGif] = useState(false);

    useEffect(() => {
        if (visible) {
            setIsRendering(true);

            fadeIn(opacity).start();

            setStatusBarStyle("light", true);
            setStatusBarBackgroundColor(COLORS.GAME.animation.background, true);
            NavigationBar.setBackgroundColorAsync(COLORS.GAME.animation.background);
            NavigationBar.setButtonStyleAsync("light");

            const gifTimeout = setTimeout(() => setShowGif(true), 300);
            return () => clearTimeout(gifTimeout);
        } else {
            fadeOut(opacity).start(() => setIsRendering(false));
            setShowGif(false);
        }
    }, [visible, opacity]);

    return { opacity, isRendering, showGif };
};
