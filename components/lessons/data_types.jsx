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
                            JavaScript — это язык с динамической типизацией, где переменные могут принимать значения разных типов в разное время выполнения. Всего существует 8 основных типов данных, разделённых на два класса: примитивные и непримитивные.
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>1. Примитивные типы</Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            Примитивные типы хранят простые значения и являются неизменяемыми. В JS к примитивам относятся:
                        </Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            — <Text style={{ fontWeight: 'bold' }}>number</Text>: Числа — как целые, так и с плавающей точкой.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let age = 25;
let price = 19.99;`}
                            </Text>
                        </Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            — <Text style={{ fontWeight: 'bold' }}>string</Text>: Строки текста, заключённые в кавычки (одинарные, двойные или обратные).
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let name = "Анна";
let greeting = \`Привет, \${name}!\`;`}
                            </Text>
                        </Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            — <Text style={{ fontWeight: 'bold' }}>boolean</Text>: Булевы значения — <Text style={{ fontWeight: 'bold' }}>true</Text> или <Text style={{ fontWeight: 'bold' }}>false</Text>.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let isLoggedIn = true;`}
                            </Text>
                        </Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            — <Text style={{ fontWeight: 'bold' }}>null</Text>: Явное отсутствие значения (устанавливается разработчиком).
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let data = null;`}
                            </Text>
                        </Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            — <Text style={{ fontWeight: 'bold' }}>undefined</Text>: Значение по умолчанию для необъявленных переменных.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let result;
console.log(result); // undefined`}
                            </Text>
                        </Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            — <Text style={{ fontWeight: 'bold' }}>symbol</Text>: Уникальные идентификаторы, полезны для ключей объектов.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`const id = Symbol("id");`}
                            </Text>
                        </Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            — <Text style={{ fontWeight: 'bold' }}>bigint</Text>: Используется для представления целых чисел произвольной длины (например, для криптографии).
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`const bigNumber = 1234567890123456789012345678901234567890n;`}
                            </Text>
                        </Text>
                        <Text style={[styles.subtitle, { color: colors.text }]}>2. Объекты (непримитивный тип)</Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            Объекты позволяют хранить коллекции значений и более сложные структуры данных. Они состоят из пар ключ: значение.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let user = {
  name: "Анна",
  age: 30,
  isAdmin: false
};`}
                            </Text>
                        </Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Также к объектам относятся: массивы, функции, дата-объекты и многие другие структуры.
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>3. Проверка типа данных</Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            Для определения типа значения используется оператор <Text style={{ fontWeight: 'bold' }}>typeof</Text>.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`typeof 42            // "number"
typeof "Привет"      // "string"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object"  // особенность языка
typeof Symbol("id")  // "symbol"
typeof 123n          // "bigint"
typeof { name: "Иван" } // "object"
typeof function(){}  // "function"`}
                            </Text>
                        </Text>
                        <Text style={[styles.subtitle, { color: colors.text }]}>Полезно знать</Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            — <Text style={{ fontWeight: 'bold' }}>typeof null === "object"</Text> — это признанная ошибка в спецификации, которую не стали менять из-за обратной совместимости.{"\n"}
                            — Все примитивы сравниваются по значению, а объекты — по ссылке.{"\n"}
                            — JavaScript позволяет преобразовывать типы неявно и явно, что может приводить к неожиданным результатам без строгой типизации.
                        </Text>
                    </ScrollView>

                );
            case 'test1':
                return (
                    <SingleAnswerTest
                        testId="data_types1"
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
                        testId="data_types2"
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
