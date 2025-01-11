import { useEffect, useRef, useState, useMemo } from "react";
import { Animated, useWindowDimensions } from "react-native";
import { fadeIn, fadeOut } from "./loadingAnimations.jsx";
import { setStatusBarBackgroundColor, setStatusBarStyle } from "expo-status-bar";
import { getGif } from "./data.jsx";

export const useEffectLoading = (visible, duration = 500) => {
    const opacity = useRef(new Animated.Value(visible ? 1 : 0)).current;
    const [isRendering, setIsRendering] = useState(true);
    const [showGif, setShowGif] = useState(false);
    const windowWidth = useWindowDimensions().width;

    const data = useMemo(() => ({
        gif: getGif(windowWidth)
    }), [windowWidth]);

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

    return { data, opacity, isRendering, showGif };
};
