import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts/ThemeProvider";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function DataTypes() {

    const [currentBlock, setCurrentBlock] = useState('theory');

    const { dark, colors } = useTheme();

    const renderBlock = () => {
        switch (currentBlock) {
            case 'theory':
                return (
                    <ScrollView style={styles.blockContainer}>
                        <Text style={[styles.title, { color: colors.text }]}>Теория: Типы данных в JavaScript</Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            В JavaScript существует 8 основных типов данных:
                            {"\n\n"}
                            <Text style={[styles.subtitle, { color: colors.text }]}>1. Примитивные типы:</Text>
                            {"\n"}
                            - <Text style={[styles.code,{ backgroundColor: colors.background }]}>number</Text>: целые и дробные числа{"\n"}
                            <Text style={[styles.code, { backgroundColor: colors.background }]}>let age = 25;</Text>
                            {"\n\n"}
                            - <Text style={[styles.code,{ backgroundColor: colors.background }]}>string</Text>: строки{"\n"}
                            <Text style={[styles.code, { backgroundColor: colors.background }]}>let name = "Иван";</Text>
                            {"\n\n"}
                            - <Text style={[styles.code,{ backgroundColor: colors.background }]}>boolean</Text>: true/false{"\n"}
                            <Text style={[styles.code, { backgroundColor: colors.background }]}>let isActive = true;</Text>
                            {"\n\n"}
                            - <Text style={[styles.code,{ backgroundColor: colors.background }]}>null</Text>: явное отсутствие значения{"\n"}
                            <Text style={[styles.code, { backgroundColor: colors.background }]}>let data = null;</Text>
                            {"\n\n"}
                            - <Text style={[styles.code,{ backgroundColor: colors.background }]}>undefined</Text>: значение не определено{"\n"}
                            <Text style={[styles.code, { backgroundColor: colors.background }]}>let value; // undefined</Text>
                            {"\n\n"}
                            - <Text style={[styles.code,{ backgroundColor: colors.background }]}>symbol</Text>: уникальные идентификаторы{"\n"}
                            <Text style={[styles.code, { backgroundColor: colors.background }]}>const id = Symbol("id");</Text>
                            {"\n\n"}
                            - <Text style={[styles.code,{ backgroundColor: colors.background }]}>bigint</Text>: для очень больших чисел{"\n"}
                            <Text style={[styles.code, { backgroundColor: colors.background }]}>const bigNum = 12345678901234567890n;</Text>
                            {"\n\n"}
                            <Text style={[styles.subtitle, { color: colors.text }]}>2. Объекты (непримитивный тип):</Text>
                            {"\n"}
                            <Text style={[styles.code, { backgroundColor: colors.background }]}>
                                let user = {"{"}{"\n"}
                                {"  "}name: "Анна",{"\n"}
                                {"  "}age: 30{"\n"}
                                {"}"};
                            </Text>
                            {"\n\n"}
                            <Text style={[styles.subtitle, { color: colors.text }]}>Проверка типов:</Text>
                            Используйте оператор <Text style={[styles.code,{ backgroundColor: colors.background }]}>typeof</Text>:{"\n"}
                            <Text style={[styles.code, { backgroundColor: colors.background }]}>
                                console.log(typeof 42); // "number"{"\n"}
                                console.log(typeof "text"); // "string"{"\n"}
                                console.log(typeof {"{"}{"}"}); // "object"
                            </Text>
                        </Text>
                    </ScrollView>
                );
            case 'test1':
                return (
                    <SingleAnswerTest
                        question="Какой оператор используется для проверки типа значения?"
                        options={[
                            "1. instanceOf",
                            "2. typeof",
                            "3. typeCheck",
                        ]}
                        correctAnswer={2}
                    />
                );
            case 'test2':
                return (
                    <SingleAnswerTest
                        question="Какой тип данных используется для хранения true/false значений?"
                        options={[
                            "1. number",
                            "2. string",
                            "3. boolean"
                        ]}
                        correctAnswer={3}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: colors.bar_background }]}>
            <View style={styles.titleBar}>

                <TouchableOpacity onPress={() => setCurrentBlock('theory')}>
                    <Text style={styles.titleBarButton}>Теория</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setCurrentBlock('test1')}>
                    <Text style={styles.titleBarButton}>Тест 1</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setCurrentBlock('test2')}>
                    <Text style={styles.titleBarButton}>Тест 2</Text>
                </TouchableOpacity>

            </View>
            {renderBlock()}
        </View>
    );
}
