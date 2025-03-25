import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts";
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
              Операторы сравнения возвращают логическое значение (true/false) в зависимости от результата сравнения:
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Основные операторы:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              5 == 5    // Равно → true{"\n"}
              5 != 3    // Не равно → true{"\n"}
              5 {">"} 3     // Больше → true{"\n"}
              5 {"<"} 3     // Меньше → false{"\n"}
              5 {">="} 5    // Больше или равно → true{"\n"}
              5 {"<="} 3    // Меньше или равно → false{"\n\n"}
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Строгое сравнение:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              '5' == 5   // true (нестрогое сравнение){"\n"}
              '5' === 5  // false (строгое сравнение, разные типы){"\n"}
              '5' !== 5  // true (строгое "не равно")
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Особые случаи:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              null == undefined  // true{"\n"}
              null === undefined // false{"\n"}
              NaN == NaN         // false (особенность NaN){"\n"}
              isNaN(NaN)        // true (правильная проверка)
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Сравнение объектов:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              let a = {"{"}value: 5{"}"};{"\n"}
              let b = {"{"}value: 5{"}"};{"\n"}
              a == b  // false (разные объекты){"\n"}
              a === b // false{"\n"}
              a.value === b.value // true (сравнение значений)
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Рекомендации:</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              - Всегда используйте строгое сравнение (=== и !==){"\n"}
              - Для проверки NaN используйте isNaN() или Number.isNaN(){"\n"}
              - При сравнении объектов сравнивайте конкретные свойства
            </Text>
          </ScrollView>
        );
      case 'test1':
        return (
          <SingleAnswerTest
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