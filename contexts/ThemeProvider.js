import { lightColors, darkColors } from "../config";
import { useColorScheme } from "react-native";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    dark: false,
    colors: lightColors,
    setScheme: () => {}
});

export const ThemeProvider = (props) => {
    const colorScheme = useColorScheme();
    const [isDark, setIsDark] = useState(colorScheme === "dark");

    useEffect(() => {
        setIsDark(colorScheme === "dark");
    }, [colorScheme]);

    const defaultTheme = {
        dark: isDark,
        colors: isDark ? darkColors : lightColors,
        setScheme: (scheme) => setIsDark(scheme === "dark")
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
