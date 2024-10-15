import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

import { icons } from "../constants/icons.js";
import { useTheme } from '../config/ThemeProvider';
import { COLORS } from '../constants/colors.js';


const TabBar = ({ state, descriptors, navigation }) => {
    const { colors } = useTheme();

    const icon = {
        index: icons.tasks,
        game: icons.game,
        progress: icons.progress,
        settings: icons.settings,
    }

    // Скрываем TabBar для экрана 'game'
    if (state.routes[state.index].name === 'game') {
        return null; // Не рендерим TabBar, если текущий экран 'game'
    }
    
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

                if (['_sitemap', '+not-found'].includes(route.name))
                    return null

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
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
                            style={{ width: 36, height: 36, tintColor: isFocused ? colors.primary : colors.not_active}}
                        />
                        
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        left: 0, 
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        //marginHorizontal: 5,
        paddingVertical: 14,
        //borderRadius: 10,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    }
})


export default TabBar