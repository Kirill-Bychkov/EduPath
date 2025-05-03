import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { fadeIn, fadeOut } from "../../utils/game/fadeAnimations";
import { setStatusBarStyle, setStatusBarBackgroundColor } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { COLORS } from "../../constants";

export const useLoadingScreen = (visible) => {
    const opacity = useRef(new Animated.Value(visible ? 1 : 0)).current;
    const [isRender, setIsRender] = useState(true);

    useEffect(() => {
        const animateLoadingScreen = async () => {
            if (visible) {
                setIsRender(true);
        
                setStatusBarStyle("light", true);
                setStatusBarBackgroundColor(COLORS.GAME.loadingScreen.background, true);
                NavigationBar.setBackgroundColorAsync(COLORS.GAME.loadingScreen.background);
                NavigationBar.setButtonStyleAsync("light");
        
                await fadeIn(opacity);
            } else {
                await fadeOut(opacity);
                setIsRender(false);
            }
        };
    
        animateLoadingScreen();
    }, [visible]);

    return { opacity, isRender };
};
