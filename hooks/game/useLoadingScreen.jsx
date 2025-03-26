import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { fadeIn, fadeOut } from "../../utils/game/loadingAnimations";

export const useLoadingScreen = (visible) => {
    const opacity = useRef(new Animated.Value(visible ? 1 : 0)).current;
    const [isRendering, setIsRendering] = useState(true);
    const [showGif, setShowGif] = useState(false);

    useEffect(() => {
        if (visible) {
            setIsRendering(true);

            fadeIn(opacity).start();

            const gifTimeout = setTimeout(() => setShowGif(true), 400);
            return () => clearTimeout(gifTimeout);
        } else {
            fadeOut(opacity).start(() => setIsRendering(false));
            setShowGif(false);
        }
    }, [visible, opacity]);

    return { opacity, isRendering, showGif };
};
