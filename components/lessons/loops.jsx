import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts/ThemeProvider";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function Loops() {
    const [currentBlock, setCurrentBlock] = useState('theory');
    const { dark, colors } = useTheme();

    const renderBlock = () => {
        switch (currentBlock) {
            case 'theory':
                return (
                    <ScrollView style={styles.blockContainer}>
                        <Text style={[styles.title, { color: colors.text }]}>Теория: Циклы в JavaScript</Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            Циклы позволяют выполнять один и тот же блок кода несколько раз — это основа для автоматизации повторяющихся действий.
                            В JavaScript есть несколько типов циклов, каждый из которых подходит под разные задачи.{"\n"}
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>1. Цикл for</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Наиболее часто используемый цикл, который содержит три части: инициализация, условие и шаг.
                            Используется, когда известно, сколько раз нужно повторить действия.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                for (let i = 0; i {"<"} 5; i++) {"{"}{"\n"}
                                {"  "}console.log(i); // Выведет числа от 0 до 4{"\n"}
                                {"}"}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>{"\n"}2. Цикл while</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Выполняет тело цикла, пока условие истинно. Подходит, когда количество итераций заранее неизвестно.
                            Важно, чтобы внутри цикла условие рано или поздно стало ложным, иначе цикл будет бесконечным.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                let i = 0;{"\n"}
                                while (i {"<"} 5) {"{"}{"\n"}
                                {"  "}console.log(i);{"\n"}
                                {"  "}i++;{"\n"}
                                {"}"}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>{"\n"}3. Цикл do...while</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Похож на while, но гарантирует выполнение тела цикла хотя бы один раз, так как условие проверяется после выполнения тела.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                let i = 0;{"\n"}
                                do {"{"}{"\n"}
                                {"  "}console.log(i);{"\n"}
                                {"  "}i++;{"\n"}
                                {"}"} while (i {"<"} 5);
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>{"\n"}4. Цикл for...of</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Используется для перебора элементов итерируемых объектов (например, массивов или строк). Очень удобен для обработки каждого элемента коллекции.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                const arr = ['яблоко', 'банан', 'вишня'];{"\n"}
                                for (let fruit of arr) {"{"}{"\n"}
                                {"  "}console.log(fruit);{"\n"}
                                {"}"}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>{"\n"}5. Рекомендации по использованию циклов</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            - Убедитесь, что условие выхода из цикла корректно определено, чтобы избежать бесконечного выполнения программы.{"\n"}
                            - Используйте цикл {" "}
                            <Text style={[styles.code, { backgroundColor: colors.background }]}>for</Text>
                            {" "} в случаях, когда заранее известно количество итераций.{"\n"}
                            - Применяйте циклы <Text style={[styles.code, { backgroundColor: colors.background }]}>while</Text> или <Text style={[styles.code, { backgroundColor: colors.background }]}>do...while</Text>, если число повторений определяется в процессе выполнения.{"\n"}
                            - Цикл <Text style={[styles.code, { backgroundColor: colors.background }]}>for...of</Text> оптимален для перебора массивов и других итерируемых структур.{"\n"}
                            - Цикл <Text style={[styles.code, { backgroundColor: colors.background }]}>for...in</Text> предназначен для перебора свойств объектов и не рекомендуется к использованию с массивами.{"\n"}
                            - Для управления потоком выполнения внутри цикла используйте ключевые слова <Text style={[styles.code, { backgroundColor: colors.background }]}>break</Text> (для досрочного выхода) и <Text style={[styles.code, { backgroundColor: colors.background }]}>continue</Text> (для перехода к следующей итерации).
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>6. Пример с break и continue</Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                for (let i = 0; i {"<"} 10; i++) {"{"}{"\n"}
                                {"  "}if (i === 5) break; // выход из цикла при i === 5{"\n"}
                                {"  "}if (i % 2 === 0) continue; // пропустить чётные числа{"\n"}
                                {"  "}console.log(i); // выведет 1, 3{"\n"}
                                {"}"}
                            </Text>
                        </Text>

                    </ScrollView>
                );

            case 'test1':
                return (
                    <SingleAnswerTest
                        question="Какой цикл гарантирует выполнение тела хотя бы один раз?"
                        options={[
                            "1. for",
                            "2. while",
                            "3. do...while"
                        ]}
                        correctAnswer={3}
                    />
                );

            case 'test2':
                return (
                    <SingleAnswerTest
                        question="Какой цикл подходит для перебора элементов массива?"
                        options={[
                            "1. for...in",
                            "2. for...of",
                            "3. while"
                        ]}
                        correctAnswer={2}
                    />
                );
            case 'test3':
                return (
                    <SingleAnswerTest
                        question="Сколько раз выполнится внутренняя часть вложенного цикла?"
                        codeBlock={`for (let i = 0; i < 5; i++) {\n  for (let j = 0; j < 5; j++) {\n    console.log(i, j);\n  }\n}`}
                        options={[
                            "1. 5 раз",
                            "2. 25 раз",
                            "3. 10 раз"
                        ]}
                        correctAnswer={2}
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
                <TouchableOpacity onPress={() => setCurrentBlock('test3')}>
                    <Text style={styles.titleBarButton}>Вопрос 3</Text>
                </TouchableOpacity>
            </View>
            {renderBlock()}
        </View>
    );
}