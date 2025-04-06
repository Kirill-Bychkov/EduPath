import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { setStatusBarStyle, setStatusBarBackgroundColor } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useTheme } from "../contexts/ThemeProvider";

export const withDynamicBars = (WrappedComponent) => {
  return (props) => {
    const { dark, colors } = useTheme();

    useFocusEffect(
        useCallback(() => {
          setStatusBarStyle(dark ? "light" : "dark");
          setStatusBarBackgroundColor(colors.bar_background);
          NavigationBar.setBackgroundColorAsync(colors.bar_background);
          NavigationBar.setButtonStyleAsync(dark ? "light" : "dark");
        }, [dark])
    );

    return <WrappedComponent {...props} />;
  };
};
