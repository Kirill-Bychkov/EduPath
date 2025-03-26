import * as SplashScreen from "expo-splash-screen";
import { FONTS } from "../constants";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export const useRootLayout = () => {
    const [loaded, error] = useFonts({
        "Rubik-Bold": FONTS["Rubik-Bold"],
        "Rubik-BoldItalic": FONTS["Rubik-BoldItalic"],
        "Rubik-Italic": FONTS["Rubik-Italic"],
        "Rubik-Light": FONTS["Rubik-Light"],
        "Rubik-LightItalic": FONTS["Rubik-LightItalic"],
        "Rubik-Regular": FONTS["Rubik-Regular"],
    });
    
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    return { loaded, error };
};
