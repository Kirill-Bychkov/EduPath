import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { IMAGES } from "../constants";
import { useTheme, useLoading } from "../contexts";

const TabBar = ({ state, descriptors, navigation }) => {
    const { colors } = useTheme();
    const { showLoading, hideLoading } = useLoading();

    const icon = {
        index: IMAGES.EDUCATION.tasks,
        game: IMAGES.EDUCATION.game,
        progress: IMAGES.EDUCATION.progress,
        settings: IMAGES.EDUCATION.settings,
    }

    if (["game", "levelGame"].includes(state.routes[state.index].name)) {
        return null;
    }

    const ShowAndHideLoading = async (route) => {
        showLoading();
        await new Promise(resolve => setTimeout(resolve, 1750));
        navigation.navigate(route.name, route.params);
        await new Promise(resolve => setTimeout(resolve, 1750));
        hideLoading();
    };

    return (
        <View style={[styles.tabbar, { backgroundColor: colors.bar_background }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                if (["_sitemap", "+not-found", "levelGame"].includes(route.name))
                    return null

                const isFocused = state.index === index;

                const onPress = async () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (route.name === "game") {
                        await ShowAndHideLoading(route);
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
        backgroundColor: "white",
        paddingVertical: 14,
        borderCurve: "continuous",
        shadowColor: "black",
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
