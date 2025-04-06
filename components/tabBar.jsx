import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { IMAGES } from "../constants";
import { useTheme } from "../contexts/ThemeProvider";
import { useGoWindow } from "../hooks/game/useGoWindow";

const TabBar = ({ state, descriptors, navigation }) => {
    const { colors } = useTheme();
    const { goWindow } = useGoWindow(navigation);

    const icon = {
        Index: IMAGES.EDUCATION.index,
        Game: IMAGES.EDUCATION.game,
        Progress: IMAGES.EDUCATION.progress,
        Settings: IMAGES.EDUCATION.settings,
    }

    if (state.routes[state.index].name === "Game") {
        return null;
    }

    return (
        <View style={[styles.tabbar, { backgroundColor: colors.bar_background }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (route.name === "Game") {
                        goWindow(route.name, route.params);
                    }
                    else {
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.name}
                        style={styles.tabbarItem}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <Image
                            source={icon[route.name]}
                            style={{ width: 36, height: 36, tintColor: isFocused ? colors.primary : colors.not_active }}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    tabbar: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14,
        borderCurve: "continuous",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    tabbarItem: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 4
    }
});

export default TabBar;
