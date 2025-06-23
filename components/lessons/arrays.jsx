import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts/ThemeProvider";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function Arrays() {
    const [currentBlock, setCurrentBlock] = useState('theory');
    const { colors } = useTheme();

    const renderBlock = () => {
        switch (currentBlock) {
            case 'theory':
                return (
                    <ScrollView style={styles.blockContainer}>
                        <Text style={[styles.title, { color: colors.text }]}>Теория: Массивы в JavaScript</Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            Массив — это особый тип объекта, предназначенный для хранения упорядоченных коллекций данных.
                            Каждый элемент массива имеет свой индекс — число, начинающееся с 0, по которому можно получить доступ к этому элементу.
                            Массивы позволяют эффективно работать с набором значений, например, списками, таблицами и др.
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>1. Объявление массива</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Создать массив можно несколькими способами, но чаще всего используется литерал массива — набор элементов в квадратных скобках.
                            Элементы разделяются запятыми.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                const fruits = ['яблоко', 'банан', 'вишня'];
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>2. Доступ к элементам массива</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Для обращения к элементу массива используется его индекс в квадратных скобках. Индексация начинается с нуля — первый элемент имеет индекс 0, второй — 1 и так далее.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                console.log(fruits[0]); // выведет 'яблоко'
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>3. Изменение элементов массива</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Массивы являются изменяемыми (мутабельными), то есть можно менять значения элементов по их индексам.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                fruits[1] = 'апельсин'; // заменит 'банан' на 'апельсин'
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>4. Основные методы массива</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            В JavaScript есть множество встроенных методов для работы с массивами. Вот самые популярные:
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                fruits.push('груша');   // добавляет элемент в конец массива{"\n"}
                                fruits.pop();           // удаляет последний элемент и возвращает его{"\n"}
                                fruits.shift();         // удаляет первый элемент и сдвигает остальные влево{"\n"}
                                fruits.unshift('персик'); // добавляет элемент в начало массива{"\n"}
                                fruits.length;          // возвращает текущую длину массива
                            </Text>
                        </Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Эти методы позволяют динамически изменять массив — добавлять, удалять и получать количество элементов.
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>5. Перебор элементов массива</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Для выполнения операций с каждым элементом массива удобно использовать цикл <Text style={{ fontWeight: 'bold' }}>for...of</Text>. Он последовательно перебирает все элементы массива.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                for (let fruit of fruits) {"{"}{"\n"}
                                {"  "}console.log(fruit); // выводит каждый фрукт по очереди{"\n"}
                                {"}"}
                            </Text>
                        </Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Также можно использовать классический цикл <Text style={{ fontWeight: 'bold' }}>for</Text> или метод <Text style={{ fontWeight: 'bold' }}>forEach</Text>.
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>6. Вложенные массивы (многомерные)</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Массивы могут содержать другие массивы как элементы. Это позволяет создавать структуры данных с несколькими измерениями, например, матрицы.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                const matrix = [[1, 2], [3, 4]];{"\n"}
                                console.log(matrix[1][0]); // выведет 3 — элемент второго массива с индексом 0
                            </Text>
                        </Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            Многомерные массивы широко используются для работы с таблицами, игровыми досками и другими структурами.
                        </Text>
                    </ScrollView>
                );

            case 'test1':
                return (
                    <SingleAnswerTest
                        testId="arrays1"
                        question="Какой индекс у первого элемента массива?"
                        options={[
                            "1. 0",
                            "2. 1",
                            "3. -1"
                        ]}
                        correctAnswer={1}
                    />
                );
            case 'test2':
                return (
                    <SingleAnswerTest
                        testId="arrays2"
                        question="Какой метод добавляет элемент в конец массива?"
                        options={[
                            "1. shift()",
                            "2. pop()",
                            "3. push()"
                        ]}
                        correctAnswer={3}
                    />
                );
            case 'test3':
                return (
                    <SingleAnswerTest
                        testId="arrays3"
                        question="Что вернет fruits.length, если в массиве 5 элементов?"
                        options={[
                            "1. 4",
                            "2. 5",
                            "3. 6"
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
