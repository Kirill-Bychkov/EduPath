import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts";


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
              <Text style={[styles.code, {backgroundColor: colors.background}]}>let x = 10;</Text>
              {"\n"}
              <Text style={[styles.code, {backgroundColor: colors.background}]}>const y = 20;</Text>
              {"\n\n"}
              Переменная, объявленная с `let`, может быть изменена:
              {"\n\n"}
              <Text style={[styles.code, {backgroundColor: colors.background}]}>
                let a = 5;{"\n"}
                a = 10; // Теперь a равно 10
              </Text>
              {"\n\n"}
              Константа, объявленная с `const`, не может быть изменена после объявления:
              {"\n\n"}
              <Text style={[styles.code, {backgroundColor: colors.background}]}>
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
              <Text style={[styles.code, {backgroundColor: colors.background}]}>
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
          <View style={styles.blockContainer}>
            <Text style={[styles.title, { color: colors.text }]}>Тест: Выберите правильный ответ</Text>
            <Text style={[styles.question, { color: colors.text }]}>
              Какой из следующих вариантов объявляет константу?
            </Text>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>1. let x = 10;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>2. const y = 20;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>3. var z = 30;</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.checkButton}
            >
              <Text style={styles.checkButtonText}>Проверить</Text>
            </TouchableOpacity>
          </View>
        );
      case 'test2':
        return (
          <View style={styles.blockContainer}>
            <Text style={[styles.title, { color: colors.text }]}>Тест: Вопрос с несколькими вариантами</Text>
            <Text style={[styles.question, { color: colors.text }]}>
              Какой из следующих вариантов объявляет переменную, которая может быть изменена?
            </Text>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>1. const x = 10;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>2. let y = 20;</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>3. var z = 30;</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.checkButton}

            >
              <Text style={styles.checkButtonText}>Проверить</Text>
            </TouchableOpacity>
          </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  checkButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  checkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleBarButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
    marginHorizontal: 9
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  blockContainer: {
    flex: 1,
    marginBottom: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 5,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  option: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },

  optionText: {
    fontSize: 16,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});