import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts/ThemeProvider";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function ComparisonOperators() {
  const [currentBlock, setCurrentBlock] = useState('theory');
  const { dark, colors } = useTheme();

  const renderBlock = () => {
    switch (currentBlock) {
      case 'theory':
        return (
          <ScrollView style={styles.blockContainer}>
            <Text style={[styles.title, { color: colors.text }]}>Теория: Операторы сравнения в JavaScript</Text>

            <Text style={[styles.text, { color: colors.text }]}>
              Операторы сравнения используются для сопоставления значений. Результатом всегда является логическое значение:{" "}
              <Text style={{ fontWeight: "bold" }}>true</Text> (истина) или <Text style={{ fontWeight: "bold" }}>false</Text> (ложь).
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>1. Базовые операторы</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              Выполняют сравнение значений без учёта типов (нестрогое сравнение):
            </Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
                {`5 == 5     // true — равно
5 != 3     // true — не равно
5 > 3      // true — больше
5 < 3      // false — меньше
5 >= 5     // true — больше или равно
5 <= 3     // false — меньше или равно`}
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>2. Строгое сравнение</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              Строгое сравнение (=== и !==) сравнивает как значения, так и типы:
            </Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
                {`'5' == 5     // true — JS приводит типы
'5' === 5    // false — типы разные
'5' !== 5    // true — типы разные`}
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>3. Неочевидные случаи</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              Некоторые значения в JavaScript ведут себя нестандартно при сравнении:
            </Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
                {`null == undefined   // true — оба "пустые"
null === undefined  // false — типы разные

NaN == NaN          // false — NaN никогда не равен сам себе
isNaN(NaN)          // true — проверка на NaN

0 == false          // true — тип приводится
0 === false         // false — разные типы`}
              </Text>
            </Text>
            <Text style={[styles.subtitle, { color: colors.text }]}>4. Сравнение объектов</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              При сравнении объектов сравниваются не значения, а ссылки:
            </Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
                {`let a = { value: 5 };
let b = { value: 5 };

a == b        // false — разные объекты
a === b       // false
a.value === b.value // true — сравнение конкретных значений`}
              </Text>
            </Text>
            <Text style={[styles.subtitle, { color: colors.text }]}>5. Поведение при преобразовании типов</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              При использовании <Text style={{ fontWeight: 'bold' }}>==</Text> JavaScript автоматически преобразует типы:
            </Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
                {`false == 0       // true
'' == 0           // true
null == 0         // false
undefined == 0    // false`}
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>6. Рекомендации</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              — Всегда предпочитайте строгое сравнение <Text style={{ fontWeight: 'bold' }}>===</Text> и <Text style={{ fontWeight: 'bold' }}>!==</Text> для надёжности.{"\n"}
              — Используйте <Text style={[styles.code, { backgroundColor: colors.background }]}>Number.isNaN()</Text> для безопасной проверки NaN.{"\n"}
              — При сравнении объектов сравнивайте их свойства, а не сами объекты.{"\n"}
              — Не полагайтесь на нестрогое сравнение с null, false или 0 — это может привести к неожиданным результатам.
            </Text>
          </ScrollView>

        );
      case 'test1':
        return (
          <SingleAnswerTest
            testId="comparison_operators1"
            question="Какой оператор выполняет строгое сравнение?"
            options={[
              "1. ==",
              "2. ===",
              "3. ="
            ]}
            correctAnswer={2}
          />
        );
      case 'test2':
        return (
          <SingleAnswerTest
            testId="comparison_operators2"
            question="Что вернет выражение null == undefined?"
            options={[
              "1. true",
              "2. false",
              "3. ошибку"
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