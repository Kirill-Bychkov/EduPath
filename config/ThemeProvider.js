import { lightColors, darkColors } from "./theme";
import { useColorScheme } from "react-native";
import React, { createContext, useContext, useEffect, useState} from "react";

export const ThemeContext = createContext({
    dark: false,
    colors: lightColors,
    setScheme: ()=>{}
})

export const ThemeProvider = (props) => {
    const colorSheme = useColorScheme(colorSheme == "dark");
    const [isDark, setIsDark] = useState(colorSheme == "dark");

    useEffect(()=>{
        setIsDark(colorSheme == "dark");
    },[colorSheme])

    const defaultTheme = {
        dark: isDark,
        colors: isDark ? darkColors : lightColors,
        setScheme: (scheme)=>setIsDark(scheme === "dark")
    }

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=>useContext(ThemeContext)