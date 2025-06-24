import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts/ThemeProvider";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function Functions() {
    const [currentBlock, setCurrentBlock] = useState('theory');
    const { dark, colors } = useTheme();

    const renderBlock = () => {
        switch (currentBlock) {
            case 'theory':
                return (
                    <ScrollView style={styles.blockContainer}>
                        <Text style={[styles.title, { color: colors.text }]}>Теория: Функции в JavaScript</Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            Функция — это именованный блок кода, который можно многократно вызывать для выполнения определённой задачи.
                            Они позволяют разбивать программу на логические части, облегчая чтение и поддержку кода.
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>{'\n'}1. Объявление функции (Function Declaration):</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Это классический способ создания функции. Объявленная таким образом функция доступна в своем блоке и поднята (hoisted) — её можно вызвать до места объявления.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`function greet(name) {
  return 'Привет, ' + name + '!';
}

console.log(greet('Анна')); // Привет, Анна!`}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>{'\n'}2. Функциональное выражение (Function Expression):</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Функция создаётся как значение переменной. В этом случае функция не поднимается и доступна только после объявления.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`const greet = function(name) {
  return 'Привет, ' + name + '!';
};

console.log(greet('Иван')); // Привет, Иван!`}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>{'\n'}3. Стрелочная функция (Arrow Function):</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Это более компактный синтаксис для функциональных выражений. Стрелочные функции не имеют собственного контекста <Text style={[styles.code, { backgroundColor: colors.background }]}>this</Text> и часто используются для колбэков и функционального программирования.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`const greet = (name) => 'Привет, ' + name + '!';

console.log(greet('Мария')); // Привет, Мария!`}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>{'\n'}4. Параметры и возвращаемое значение:</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Функции могут принимать любое количество параметров — входных данных для обработки. Если параметр не передан, его значение будет <Text style={[styles.code, { backgroundColor: colors.background }]}>undefined</Text>.
                            Результат работы функции возвращается оператором <Text style={[styles.code, { backgroundColor: colors.background }]}>return</Text>. Если оператор отсутствует, функция вернёт <Text style={[styles.code, { backgroundColor: colors.background }]}>undefined</Text>.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(2));    // NaN (потому что b undefined, 2 + undefined -> NaN)`}
                            </Text>
                        </Text>
                        <Text style={[styles.subtitle, { color: colors.text }]}>{'\n'}5. Область видимости (Scope):</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Переменные, объявленные внутри функции, доступны только внутри неё (локальная область видимости).
                            Внешние переменные доступны внутри функции, если не перекрыты локальными переменными с тем же именем.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`let x = 10;

function example() {
  let x = 5; // локальная переменная
  console.log(x); // 5
}

example();
console.log(x); // 10 (внешняя переменная не изменилась)`}
                            </Text>
                        </Text>
                        <Text style={[styles.subtitle, { color: colors.text }]}>{'\n'}6. Функции как значения и передача в другие функции:</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Функции — это объекты первого класса в JavaScript. Их можно присваивать переменным, передавать в другие функции и возвращать из функций.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`function callFunction(func) {
  func();
}

function sayHello() {
  console.log('Привет!');
}

callFunction(sayHello); // Привет!`}
                            </Text>
                        </Text>
                        <Text style={[styles.subtitle, { color: colors.text }]}>{'\n'}7. Рекомендации при работе с функциями:</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            - Каждая функция должна выполнять одну логическую задачу.{'\n'}
                            - Давайте функциям говорящие имена, отражающие их действие.{'\n'}
                            - Используйте стрелочные функции для лаконичности и когда нужна лексическая область видимости <Text style={[styles.code, { backgroundColor: colors.background }]}>this</Text>. {'\n'}
                            - Избегайте побочных эффектов — функции должны быть максимально чистыми (не изменять внешнее состояние).{'\n'}
                            - Комментируйте сложные функции для улучшения поддержки кода.
                        </Text>
                    </ScrollView>

                );

            case 'test1':
                return (
                    <SingleAnswerTest
                        testId="functions1"
                        question="Как объявить функцию, принимающую параметр name?"
                        options={[
                            "1. function greet(name) {}",
                            "2. const greet = (name) => {}",
                            "3. Оба варианта верны",
                        ]}
                        correctAnswer={3}
                    />
                );

            case 'test2':
                return (
                    <SingleAnswerTest
                        testId="functions2"
                        question="Что возвращает функция без оператора return?"
                        options={[
                            "1. null",
                            "2. undefined",
                            "3. 0",
                        ]}
                        correctAnswer={2}
                    />
                );

            case 'test3':
                return (
                    <SingleAnswerTest
                        testId="functions3"
                        question="Какой синтаксис используется для стрелочной функции?"
                        options={[
                            "1. function() => {}",
                            "2. () => {}",
                            "3. => function() {}",
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
