import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../contexts/ThemeProvider";
import { useNavigationState } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import { setStatusBarStyle } from "expo-status-bar";
import { COLORS } from "../constants";
import { activeRouteName } from "../utils/activeRouteName";

const BarView = ({ children }) => {
    const
        insets = useSafeAreaInsets(),
        { dark, colors } = useTheme();
        
    const
        navState = useNavigationState((state) => state),
        currentRoute = activeRouteName(navState),
        isGameScreen = currentRoute.includes("Game");
    
    let barColor = "";
    
    if (isGameScreen) {
        barColor = COLORS.GAME.stat_nav_bar.background;
    } else {
        barColor = colors.bar_background;
        setStatusBarStyle(dark ? "light" : "dark", true);
        NavigationBar.setButtonStyleAsync(dark ? "light" : "dark");
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: insets.top, backgroundColor: barColor }} />
            {children}
            <View style={{ height: insets.bottom, backgroundColor: barColor }} />
        </View>
    );
};

export default BarView;
