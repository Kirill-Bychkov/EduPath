import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts/ThemeProvider";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function TernaryOperator() {
  const [currentBlock, setCurrentBlock] = useState('theory');
  const { dark, colors } = useTheme();

  const renderBlock = () => {
    switch (currentBlock) {
      case 'theory':
        return (
          <ScrollView style={styles.blockContainer}>
            <Text style={[styles.title, { color: colors.text }]}>Теория: Тернарный оператор в JavaScript</Text>

            <Text style={[styles.text, { color: colors.text }]}>
              Тернарный оператор - это компактная альтернатива условному оператору if-else, которая позволяет присваивать значения или выполнять выражения в зависимости от условия.
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Синтаксис:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
              условие ? выражение_если_true : выражение_если_false
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Простые примеры:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
              // Присвоение значения переменной{"\n"}
              let age = 20;{"\n"}
              let status = age {">"}= 18 ? 'взрослый' : 'ребенок';{"\n"}
              // status = 'взрослый'{"\n\n"}
              
              // Возврат значения в функции{"\n"}
              function getFee(isMember) {"{"}{"\n"}
              {"  "}return isMember ? '2.00$' : '10.00$';{"\n"}
              {"}"}{"\n"}
              getFee(true); // → '2.00$'{"\n\n"}
              
              // Выполнение действий{"\n"}
              let isMorning = true;{"\n"}
              isMorning ? console.log('Доброе утро!') : console.log('Добрый день!');
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Вложенные тернарные операторы:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
              let score = 85;{"\n"}
              let grade = score {">"}= 90 ? 'A' :{"\n"}
                score {">"}= 80 ? 'B' :{"\n"}
                score {">"}= 70 ? 'C' :{"\n"}
                score {">"}= 60 ? 'D' : 'F';{"\n"}
              // grade = 'B'
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Использование в JSX:</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              <Text style={[{ color: colors.text }]}>
              function Greeting(props) {"{"}{"\n"}
              {"  "}return ({"\n"}
              {"    "}{"<div>"}{"\n"}
              {"      "}{"{"}props.isLoggedIn ? ({"\n"}
              {"        "}{"<WelcomeBack />"}{"\n"}
              {"      "}) : ({"\n"}
              {"        "}{"<LoginButton />"}{"\n"}
              {"      "}){"}"}{"\n"}
              {"    "}{"</div>"}{"\n"}
              {"  "});{"\n"}
              {"}"}
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Рекомендации:</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              - Используйте для простых условий с двумя вариантами{"\n"}
              - Избегайте сложных вложенных тернарных операторов{"\n"}
              - Хорошо подходит для условного рендеринга в React{"\n"}
              - Не злоупотребляйте - иногда if-else читается лучше
            </Text>
          </ScrollView>
        );
      case 'test1':
        return (
          <SingleAnswerTest
            question="Какой синтаксис у тернарного оператора?"
            options={[
              "1. условие : выражение1 ? выражение2",
              "2. условие ? выражение1 : выражение2",
              "3. выражение1 ? выражение2 : условие"
            ]}
            correctAnswer={2}
          />
        );
      case 'test2':
        return (
          <SingleAnswerTest
            question="Что вернет выражение: let x = false ? 'A' : 'B'?"
            options={[
              "1. 'A'",
              "2. 'B'",
              "3. false"
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
      </View>
      {renderBlock()}
    </View>
  );
}