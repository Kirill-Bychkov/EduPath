import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function ConditionalOperators() {
  const [currentBlock, setCurrentBlock] = useState('theory');
  const { dark, colors } = useTheme();

  const renderBlock = () => {
    switch (currentBlock) {
      case 'theory':
        return (
          <ScrollView style={styles.blockContainer}>
            <Text style={[styles.title, { color: colors.text }]}>Теория: Условные операторы в JavaScript</Text>

            <Text style={[styles.text, { color: colors.text }]}>
              Условные операторы позволяют выполнять разные действия в зависимости от условий. В JavaScript есть несколько способов организации условной логики:
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>1. Оператор if-else:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              if (условие) {"{"}{"\n"}
              {"  "}// выполняется, если условие истинно{"\n"}
              {"}"} else {"{"}{"\n"}
              {"  "}// выполняется, если условие ложно{"\n"}
              {"}"}{"\n\n"}
              
              let age = 18;{"\n"}
              if (age {">"}= 18) {"{"}{"\n"}
              {"  "}console.log('Доступ разрешен');{"\n"}
              {"}"} else {"{"}{"\n"}
              {"  "}console.log('Доступ запрещен');{"\n"}
              {"}"}
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>2. else-if для множества условий:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              let score = 85;{"\n"}
              if (score {">"}= 90) {"{"}{"\n"}
              {"  "}grade = 'A';{"\n"}
              {"}"} else if (score {">"}= 80) {"{"}{"\n"}
              {"  "}grade = 'B';{"\n"}
              {"}"} else if (score {">"}= 70) {"{"}{"\n"}
              {"  "}grade = 'C';{"\n"}
              {"}"} else {"{"}{"\n"}
              {"  "}grade = 'D';{"\n"}
              {"}"}
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>3. Оператор switch-case:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              let day = 3;{"\n"}
              let dayName;{"\n\n"}
              
              switch (day) {"{"}{"\n"}
              {"  "}case 1:{"\n"}
              {"    "}dayName = 'Понедельник';{"\n"}
              {"    "}break;{"\n"}
              {"  "}case 2:{"\n"}
              {"    "}dayName = 'Вторник';{"\n"}
              {"    "}break;{"\n"}
              {"  "}// ... другие дни{"\n"}
              {"  "}default:{"\n"}
              {"    "}dayName = 'Неизвестный день';{"\n"}
              {"}"}{"\n\n\n"}
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>4. Тернарный оператор:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              // Простое условие в одну строку{"\n"}
              let status = (age {">"}= 18) ? 'взрослый' : 'ребенок';{"\n\n"}
              
              // Эквивалентно:{"\n"}
              let status;{"\n"}
              if (age {">"}= 18) {"{"}{"\n"}
              {"  "}status = 'взрослый';{"\n"}
              {"}"} else {"{"}{"\n"}
              {"  "}status = 'ребенок';{"\n"}
              {"}"}
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Рекомендации:</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              - Используйте if-else для сложной логики с несколькими условиями{"\n"}
              - Switch-case хорошо подходит для множества сравнений одного значения{"\n"}
              - Тернарный оператор используйте для простых условий{"\n"}
              - Всегда добавляйте break в case-блоках{"\n"}
              - Используйте фигурные скобки {} для блоков кода, даже если там одна строка
            </Text>
          </ScrollView>
        );
      case 'test1':
        return (
          <SingleAnswerTest
            question="Какой оператор пропускается в switch-case, что может привести к ошибкам?"
            options={[
              "1. default",
              "2. break",
              "3. case"
            ]}
            correctAnswer={2}
          />
        );
      case 'test2':
        return (
          <SingleAnswerTest
            question="Какой оператор лучше использовать для проверки диапазона значений?"
            options={[
              "1. Тернарный оператор",
              "2. switch-case",
              "3. if-else"
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