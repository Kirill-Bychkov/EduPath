import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function LogicalOperators() {
  const [currentBlock, setCurrentBlock] = useState('theory');
  const { dark, colors } = useTheme();

  const renderBlock = () => {
    switch (currentBlock) {
      case 'theory':
        return (
          <ScrollView style={styles.blockContainer}>
            <Text style={[styles.title, { color: colors.text }]}>Теория: Логические операторы в JavaScript</Text>

            <Text style={[styles.text, { color: colors.text }]}>
              Логические операторы используются для работы с булевыми значениями (true/false) и позволяют комбинировать или инвертировать условия:
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Основные операторы:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
              // Логическое И (AND) - возвращает true, если оба операнда true{"\n"}
              true && true   // → true{"\n"}
              true && false  // → false{"\n\n"}
              
              // Логическое ИЛИ (OR) - возвращает true, если хотя бы один операнд true{"\n"}
              true || false  // → true{"\n"}
              false || false // → false{"\n\n"}
              
              // Логическое НЕ (NOT) - инвертирует значение{"\n"}
              !true          // → false{"\n"}
              !false         // → true
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Особенности работы:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
              // Возвращают значение одного из операндов{"\n"}
              'text' && 42   // → 42 (последнее истинное значение){"\n"}
              0 || 'default' // → 'default' (первое истинное значение){"\n\n"}
              
              // Приоритет операторов: ! {">"} && {">"} ||{"\n"}
              true || false && false // → true{"\n"}
              (true || false) && false // → false
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Практическое применение:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
              // Проверка нескольких условий{"\n"}
              if (age {">"} 18 && age {"<"} 65) {"{"}{"\n"}
              {"  "}console.log('Доступ разрешен');{"\n"}
              {"}"}{"\n\n"}
              
              // Установка значения по умолчанию{"\n"}
              let name = username || 'Гость';{"\n\n"}
              
              // Проверка на отрицание{"\n"}
              if (!isLoggedIn) {"{"}{"\n"}
              {"  "}console.log('Пожалуйста, войдите');{"\n"}
              {"}"}
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Рекомендации:</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              - Используйте скобки для явного указания приоритета операций{"\n"}
              - Будьте осторожны с преобразованием типов в логических операциях{"\n"}
              - Используйте && для условного рендеринга в JSX{"\n"}
              - Оператор || удобен для задания значений по умолчанию
            </Text>
          </ScrollView>
        );
      case 'test1':
        return (
          <SingleAnswerTest
            question="Какой оператор возвращает true, если оба операнда true?"
            options={[
              "1. ||",
              "2. &&",
              "3. !"
            ]}
            correctAnswer={2}
          />
        );
      case 'test2':
        return (
          <SingleAnswerTest
            question="Что вернет выражение 0 || 'default'?"
            options={[
              "1. 0",
              "2. 'default'",
              "3. true"
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