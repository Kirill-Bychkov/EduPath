import { StyleSheet, Text, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../contexts";
import TitleBar from "../components/titleBar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";
import { useNavigationState } from "@react-navigation/native";

import VariablesAndConstants from "../components/lessons/variables_and_constants.jsx";
import DataTypes from "../components/lessons/data_types.jsx"
import ArithmeticOperators from "../components/lessons/arithmetic_operators.jsx"
import ComparisonOperators from "../components/lessons/comparison_operators.jsx"
import LogicalOperators from "../components/lessons/logical_operators.jsx"
import TernaryOperator from "../components/lessons/ternary_operator.jsx"
import ConditionalOperators from "../components/lessons/conditional_operators.jsx"

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
        { id: "Типы данных", path: "data_types" },
        { id: "Арифметические операторы", path: "arithmetic_operators" },
        { id: "Операторы сравнения", path: "comparison_operators" },
        { id: "Логические операторы", path: "logical_operators" },
        { id: "Тернарный оператор", path: "ternary_operator" },
        { id: "Условные операторы", path: "conditional_operators" },
    ];

    const renderScreen = () => {
        switch (currentScreen) {
            case "variables_and_constants":
                return <VariablesAndConstants setCurrentScreen={setCurrentScreen} />;
            case "data_types":
                return <DataTypes setCurrentScreen={setCurrentScreen} />;
            case "arithmetic_operators":
                return <ArithmeticOperators setCurrentScreen={setCurrentScreen} />;
            case "comparison_operators":
                return <ComparisonOperators setCurrentScreen={setCurrentScreen} />;
            case "logical_operators":
                return <LogicalOperators setCurrentScreen={setCurrentScreen} />;
            case "ternary_operator":
                return <TernaryOperator setCurrentScreen={setCurrentScreen} />;
            case "conditional_operators":
                return <ConditionalOperators setCurrentScreen={setCurrentScreen} />;
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
