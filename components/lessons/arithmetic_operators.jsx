import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts/ThemeProvider";
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
                            Арифметические операторы позволяют выполнять математические вычисления над числами. В JavaScript поддерживаются как базовые, так и специальные операторы, а также их комбинированные формы.
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>1. Базовые операторы</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Используются для выполнения основных математических действий:
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let a = 10 + 5;  // Сложение → 15
let b = 10 - 5;  // Вычитание → 5
let c = 10 * 5;  // Умножение → 50
let d = 10 / 5;  // Деление → 2
let e = 10 % 3;  // Остаток от деления → 1`}
                            </Text>
                        </Text>
                        <Text style={[styles.subtitle, { color: colors.text }]}>2. Возведение в степень</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Оператор <Text style={{ fontWeight: 'bold' }}>**</Text> используется для возведения числа в степень.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let f = 2 ** 3; // 2 в степени 3 → 8`}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>3. Инкремент и декремент</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Эти операторы увеличивают или уменьшают значение переменной на 1. Могут быть в префиксной или постфиксной форме:
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let x = 5;
let y = ++x; // Префикс: x становится 6, y = 6
let z = x--; // Постфикс: z = 6, x становится 5`}
                            </Text>
                        </Text>
                        <Text style={[styles.subtitle, { color: colors.text }]}>4. Комбинированные операторы</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Это сокращённая форма записи, объединяющая арифметику и присваивание:
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let n = 10;
n += 5;  // n = 15
n -= 3;  // n = 12
n *= 2;  // n = 24
n /= 4;  // n = 6
n %= 5;  // n = 1`}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>5. Особенности поведения</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            — <Text style={{ fontWeight: 'bold' }}>Оператор +</Text> выполняет не только сложение, но и объединение строк:
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`console.log(5 + 5);        // 10
console.log("5" + 5);      // "55" — строка
console.log("5" - 2);      // 3 — "-" приводит к числу`}
                            </Text>
                        </Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            — Деление на ноль не вызывает ошибку, а возвращает специальное значение:
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`console.log(10 / 0); // Infinity`}
                            </Text>
                        </Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            — Остаток от деления (%) сохраняет знак делимого:
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`console.log(5 % 2);   // 1
console.log(-5 % 2);  // -1`}
                            </Text>
                        </Text>
                        <Text style={[styles.subtitle, { color: colors.text }]}>6. Приоритет операторов</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Арифметические операторы имеют разный приоритет (от самого высокого к низкому):
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`1. ()
2. ** (возведение в степень)
3. *, /, %
4. +, -`}
                            </Text>
                        </Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Скобки позволяют явно задать порядок вычислений.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let result = 2 + 3 * 4;       // 14
let fixed = (2 + 3) * 4;        // 20`}
                            </Text>
                        </Text>
                    </ScrollView>

                );
            case 'test1':
                return (
                    <SingleAnswerTest
                        testId="arithmetic_operators1"
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
                        testId="arithmetic_operators2"
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
                    <Text style={styles.titleBarButton}>Вопрос 1</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setCurrentBlock('test2')}>
                    <Text style={styles.titleBarButton}>Вопрос 2</Text>
                </TouchableOpacity>

            </View>
            {renderBlock()}
        </View>
    );
}
