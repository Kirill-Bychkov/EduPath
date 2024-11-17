import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../config/ThemeProvider';
import { icons } from "../constants/icons.js";
import TitleBar from "../components/TitleBar.jsx";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors.js';
import { useNavigationState } from '@react-navigation/native';


export default function App() {
    const { dark, colors } = useTheme();

    const currentRoute = useNavigationState(state => state.routes[state.index].name);

    const statusBarColor = currentRoute === 'index'
        ? colors.bar_background
        : currentRoute === 'game'
            ? "black"
            : colors.background;

    const statusBarTextColor =
        ((currentRoute === 'index') && dark) || currentRoute === "game"
            ? "light-content"
            : "dark-content";


    const DATA = [
        { id: 'Переменные и типы данных', path: console.log('Переменные и типы данных') },
        { id: 'Операторы', path: console.log('Операторы') },
        { id: 'Условные операторы', path: console.log('Условные операторы') },
        { id: 'Структуры данных: Списки', path: console.log('Структуры данных: Списки') },
        { id: 'Структуры данных: Кортежи', path: console.log('Структуры данных: Кортежи') },
        { id: 'Структуры данных: Словари', path: console.log('Структуры данных: Словари') },
        { id: 'Структуры данных: Множества', path: console.log('Структуры данных: Множества') },
        { id: 'Циклы' },

    ]

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={statusBarColor}
                    translucent={true}
                    barStyle={statusBarTextColor}
                />
                <TitleBar />
                <ScrollView
                    style={[styles.container, { backgroundColor: colors.background }]}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    contentContainerStyle={styles.scrollViewContent}
                >
                    {DATA.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.block, { backgroundColor: colors.primary }]}
                            onPress={item.path}
                        >
                            <Text style={[styles.blockText, { color: COLORS.dark_text }]}>{item.id}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        paddingTop: 10, // Высота TitleBar
        paddingBottom: 70, // Высота TabBar
    },
    block: {
        borderRadius: 10,
        padding: 20,
        marginBottom: 16,
        marginHorizontal: 13,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // для тени на Android
    },
    blockText: {
        fontSize: 18,
        fontFamily: 'Rubik-Bold',
    },
});
