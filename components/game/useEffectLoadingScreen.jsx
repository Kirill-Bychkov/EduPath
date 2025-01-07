import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { fadeIn, fadeOut } from "./loadingAnimations.jsx";
import { setStatusBarBackgroundColor, setStatusBarStyle } from "expo-status-bar";

export const useEffectLoading = (visible, duration = 500) => {
    const opacity = useRef(new Animated.Value(visible ? 1 : 0)).current;
    const [isRendering, setIsRendering] = useState(true);
    const [showGif, setShowGif] = useState(false);

    useEffect(() => {
        if (visible) {
            setStatusBarBackgroundColor("black", true);
            setStatusBarStyle("light", true);
            setIsRendering(true);

            fadeIn(opacity, duration).start();

            const gifTimeout = setTimeout(() => setShowGif(true), 350);
            return () => clearTimeout(gifTimeout);
        } else {
            fadeOut(opacity, duration).start(() => setIsRendering(false));
            setShowGif(false);
        }
    }, [visible, duration, opacity]);

    return { opacity, isRendering, showGif };
};
