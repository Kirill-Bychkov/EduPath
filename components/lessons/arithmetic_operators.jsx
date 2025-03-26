import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function ArithmeticOperators() {

    const [currentBlock, setCurrentBlock] = useState('theory');

    const { dark, colors } = useTheme();

    const renderBlock = () => {
        switch (currentBlock) {
            case 'theory':
                return (
                    <ScrollView style={styles.blockContainer}>
                        <Text style={[styles.title, { color: colors.text }]}>Теория: Арифметические операторы в JavaScript</Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            JavaScript поддерживает стандартные арифметические операторы:
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>Базовые операторы:</Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            let a = 10 + 5;  // Сложение → 15{"\n"}
                            let b = 10 - 5;  // Вычитание → 5{"\n"}
                            let c = 10 * 5;  // Умножение → 50{"\n"}
                            let d = 10 / 5;  // Деление → 2{"\n"}
                            let e = 10 % 3;  // Остаток от деления → 1
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>Специальные операторы:</Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            let f = 10 ** 2; // Возведение в степень → 100{"\n"}
                            let g = ++a;    // Инкремент (увеличение на 1){"\n"}
                            let h = --b;    // Декремент (уменьшение на 1)
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>Комбинированные операторы:</Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            let x = 10;{"\n"}
                            x += 5;  // То же что x = x + 5 → 15{"\n"}
                            x -= 3;  // То же что x = x - 3 → 12{"\n"}
                            x *= 2;  // То же что x = x * 2 → 24{"\n"}
                            x /= 4;  // То же что x = x / 4 → 6{"\n\n"}
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>Особенности:</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            - Оператор "+" может выполнять как сложение чисел, так и конкатенацию строк{"\n"}
                            - Деление на ноль возвращает <Text style={styles.code}>Infinity</Text>{"\n"}
                            - Остаток от деления (%) сохраняет знак делимого
                        </Text>
                    </ScrollView>
                );
            case 'test1':
                return (
                    <SingleAnswerTest
                        question="Какой оператор вычисляет остаток от деления?"
                        options={[
                            "1. /",
                            "2. mod",
                            "3. %"
                        ]}
                        correctAnswer={3}
                    />
                );
            case 'test2':
                return (
                    <SingleAnswerTest
                        question="Что вернет выражение 2 ** 3?"
                        options={[
                            "1. 8",
                            "2. 6",
                            "3. 9"
                        ]}
                        correctAnswer={1}
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
