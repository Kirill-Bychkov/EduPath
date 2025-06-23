import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts/ThemeProvider";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function Objects() {
    const [currentBlock, setCurrentBlock] = useState('theory');
    const { colors } = useTheme();

    const renderBlock = () => {
        switch (currentBlock) {
            case 'theory':
                return (
                    <ScrollView style={styles.blockContainer}>
                        <Text style={[styles.title, { color: colors.text }]}>Теория: Объекты в JavaScript</Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            Объекты — это фундаментальная структура данных в JavaScript, которая позволяет хранить связанные данные в виде пар «ключ-значение».{"\n"}
                            Ключи — это всегда строки или символы, а значения могут быть любыми: примитивами, массивами, функциями и даже другими объектами.{"\n"}
                            Объекты используются для моделирования сложных сущностей и объединения данных и поведения в одном месте.
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>1. Создание объекта</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Объекты создаются обычно с помощью литерала объекта — списка пар ключ: значение в фигурных скобках.{"\n"}
                            Каждый ключ отделяется от значения двоеточием, а пары разделяются запятыми.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`const person = {
  name: 'Анна',     // имя — строка
  age: 25,          // возраст — число
  isStudent: true   // статус студента — булево значение
};`}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>2. Доступ к свойствам объекта</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Для доступа к данным внутри объекта можно использовать два способа:{"\n"}
                            — <Text style={{ fontWeight: 'bold' }}>Точечная нотация</Text>: удобна и чаще используется, когда имя свойства известно заранее и является допустимым идентификатором.{"\n"}
                            — <Text style={{ fontWeight: 'bold' }}>Скобочная нотация</Text>: применяется, если имя свойства хранится в переменной или содержит символы, недопустимые для точечной нотации.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`console.log(person.name);    // Анна
console.log(person['age']);   // 25`}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>3. Изменение и добавление свойств</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Свойства объекта можно менять или создавать новые, просто присваивая значения по ключу.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`person.age = 26;          // обновили существующее свойство
person.city = 'Москва';    // добавили новое свойство`}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>4. Удаление свойств</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Чтобы удалить свойство из объекта, используется оператор <Text style={{ fontWeight: 'bold' }}>delete</Text>.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`delete person.isStudent;  // удаляет свойство isStudent из объекта person`}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>5. Перебор свойств объекта</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Чтобы пройтись по всем свойствам объекта, используют цикл <Text style={{ fontWeight: 'bold' }}>for...in</Text>.{"\n"}
                            В каждой итерации переменная цикла получает имя очередного свойства, по которому можно получить значение.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`for (let key in person) {
  console.log(key + ': ' + person[key]);
}
// Выведет:
// name: Анна
// age: 26
// city: Москва`}
                            </Text>
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>6. Методы объекта</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            Методы — это функции, сохранённые как свойства объекта. Они описывают поведение объекта и позволяют работать с его данными.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`const obj = {
  greet() {
    return 'Привет!';
  }
};

console.log(obj.greet()); // Привет!`}
                            </Text>
                        </Text>

                        <Text style={[styles.text, { color: colors.text }]}>
                            Методы могут использовать ключевое слово <Text style={{ fontWeight: 'bold' }}>this</Text> для обращения к другим свойствам объекта внутри функции.
                        </Text>

                        <Text style={[styles.subtitle, { color: colors.text }]}>7. Дополнительные особенности объектов</Text>
                        <Text style={[styles.text, { color: colors.text }]}>
                            — Ключами могут быть только строки или символы (Symbol).{"\n"}
                            — Порядок свойств в объекте не гарантирован — для упорядоченных коллекций лучше использовать массивы.{"\n"}
                            — Объекты — это ссылочный тип данных, при присваивании копируется ссылка на объект, а не сам объект.{"\n"}
                            — Для проверки наличия свойства в объекте используется оператор <Text style={{ fontWeight: 'bold' }}>in</Text>.
                        </Text>
                        <Text style={[styles.code, { backgroundColor: colors.background }]}>
                            <Text style={[{ color: colors.text }]}>
                                {`console.log('name' in person);   // true
console.log('salary' in person); // false`}
                            </Text>
                        </Text>
                    </ScrollView>
                );

            case 'test1':
                return (
                    <SingleAnswerTest
                        testId="objects1"
                        question="Какой тип данных обычно используется для ключей в объектах JavaScript?"
                        options={[
                            "1. Числа",
                            "2. Строки или символы",
                            "3. Булевы значения"
                        ]}
                        correctAnswer={2}
                    />
                );

            case 'test2':
                return (
                    <SingleAnswerTest
                        testId="objects2"
                        question="Как удалить свойство из объекта?"
                        options={[
                            "1. object.remove('key')",
                            "2. delete object.key",
                            "3. object.deleteKey('key')"
                        ]}
                        correctAnswer={2}
                    />
                );

            case 'test3':
                return (
                    <SingleAnswerTest
                        testId="objects3"
                        question="Как перебрать все свойства объекта?"
                        options={[
                            "1. for (let key in object)",
                            "2. for (let item of object)",
                            "3. object.forEach()"
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
                <TouchableOpacity onPress={() => setCurrentBlock('test3')}>
                    <Text style={styles.titleBarButton}>Вопрос 3</Text>
                </TouchableOpacity>
            </View>
            {renderBlock()}
        </View>
    );
}
