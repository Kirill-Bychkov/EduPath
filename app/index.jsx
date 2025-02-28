import { StyleSheet, Text, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../contexts";
import TitleBar from "../components/titleBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import { useNavigationState } from "@react-navigation/native";

import VariablesAndConstants from "../lessons/Variables_and_constants.jsx";

const App = () => {
    const { dark, colors } = useTheme();

    const [currentScreen, setCurrentScreen] = useState("index");

    const currentRoute = useNavigationState(state => state.routes[state.index].name);

    const statusBarColor = currentRoute === "index"
        ? colors.bar_background
        : ["game", "levelGame"].includes(currentRoute)
            ? "black"
            : colors.background;

    const statusBarTextColor = ["game", "levelGame"].includes(currentRoute)
        ? "light-content"
        : (currentRoute === "index") && dark
            ? "light-content"
            : "dark-content";

    const DATA = [
        { id: "Переменные и константы", path: "variables_and_constants" },
    ];

    const renderScreen = () => {
        switch (currentScreen) {
            case "variables_and_constants":
                return <VariablesAndConstants setCurrentScreen={setCurrentScreen} />;
            default:
                return (
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
                                onPress={() => setCurrentScreen(item.path)}
                            >
                                <Text style={[styles.blockText, { color: COLORS.EDUCATION.dark_text }]}>{item.id}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                )
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={statusBarColor}
                    translucent={true}
                    barStyle={statusBarTextColor}
                />
                <TitleBar
                    currentScreen={currentScreen}
                    setCurrentScreen={setCurrentScreen}
                />
                {renderScreen()}
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContent: {
        paddingTop: 10,
        paddingBottom: 70,
    },
    block: {
        borderRadius: 10,
        padding: 20,
        marginBottom: 16,
        marginHorizontal: 13,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    blockText: {
        fontSize: 18,
        fontFamily: "Rubik-Bold",
    },
});

export default App;
