import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function VariablesAndConstants() {

  const [currentBlock, setCurrentBlock] = useState('theory');

  const { dark, colors } = useTheme();

  const renderBlock = () => {
    switch (currentBlock) {
      case 'theory':
        return (
          <ScrollView style={styles.blockContainer}>
            <Text style={[styles.title, { color: colors.text }]}>Теория: Переменные и константы</Text>

            <Text style={[styles.text, { color: colors.text }]}>
              Переменные в JavaScript объявляются с помощью ключевых слов `let`, `const` или `var`.
              {"\n\n"}
              <Text style={[styles.code, { backgroundColor: colors.background }]}>let x = 10;</Text>
              {"\n"}
              <Text style={[styles.code, { backgroundColor: colors.background }]}>const y = 20;</Text>
              {"\n\n"}
              Переменная, объявленная с `let`, может быть изменена:
              {"\n\n"}
              <Text style={[styles.code, { backgroundColor: colors.background }]}>
                let a = 5;{"\n"}
                a = 10; // Теперь a равно 10
              </Text>
              {"\n\n"}
              Константа, объявленная с `const`, не может быть изменена после объявления:
              {"\n\n"}
              <Text style={[styles.code, { backgroundColor: colors.background }]}>
                const b = 15;{"\n"}
                b = 20; // Ошибка! Константу нельзя изменить
              </Text>
              {"\n\n"}
              Ранее в JavaScript использовалось `var`, но его рекомендуется избегать из-за особенностей области видимости.
              {"\n\n"}
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Область видимости переменных</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              `let` и `const` имеют блочную область видимости (они доступны только в пределах блока `{ }`), а `var` - функциональную область видимости:
              {"\n\n"}
              <Text style={[styles.code, { backgroundColor: colors.background }]}>
                if (true) {"{"}{"\n"}
                {"  "}let x = 10;{"\n"}
                {"  "}var y = 20;{"\n"}
                {"}"}{"\n"}
                console.log(y); // 20{"\n"}
                console.log(x); // Ошибка! x не определена
                {"\n\n"}
              </Text>
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Когда использовать `let` и `const`?</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              - Используйте `const`, если переменная не должна изменяться.{"\n"}
              - Используйте `let`, если значение переменной будет изменяться.{"\n"}
              - `var` лучше не использовать.

            </Text>
          </ScrollView>
        );
      case 'test1':
        return (
          <SingleAnswerTest
            question="Какой из следующих вариантов объявляет константу?"
            options={[
              "1. let x = 10;",
              "2. const y = 20;",
              "3. var z = 30;",
            ]}
            correctAnswer={2}
          />
        );
      case 'test2':
        return (
          <SingleAnswerTest
            question="Какая область видимости у переменных, объявленных с помощью let и const?"
            options={[
              "1. Глобальная",
              "2. Функциональная",
              "3. Блочная"
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
