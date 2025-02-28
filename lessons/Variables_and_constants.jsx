import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { IMAGES } from '../constants';

export default function VariablesAndConstants({ setCurrentScreen }) {
  const [currentBlock, setCurrentBlock] = useState('theory'); // Состояние для текущего блока

  const icon = {
    theory: IMAGES.EDUCATION.theory,
    question: IMAGES.EDUCATION.question,
  }

  const renderBlock = () => {
    switch (currentBlock) {
      case 'theory':
        return (
          <ScrollView style={styles.blockContainer}>
            <Text style={styles.title}>Теория: Переменные и константы</Text>
            <Text style={styles.text}>
              Переменные в JavaScript объявляются с помощью ключевых слов `let`, `const` или `var`.
              Например:
              {"\n\n"}
              <Text style={styles.code}>let x = 10;</Text>
              {"\n"}
              <Text style={styles.code}>const y = 20;</Text>
            </Text>
          </ScrollView>
        );
      case 'practice':
        return (
          <View style={styles.blockContainer}>
            <Text style={styles.title}>Практика: Выберите правильный ответ</Text>
            <Text style={styles.question}>
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
          </View>
        );
      case 'quiz':
        return (
          <View style={styles.blockContainer}>
            <Text style={styles.title}>Тест: Вопрос с несколькими вариантами</Text>
            <Text style={styles.question}>
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
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.titleBar}>
        <TouchableOpacity onPress={() => setCurrentBlock('theory')}>
          <Image
            source={icon.theory}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCurrentBlock('practice')}>
          <Image
            source={icon.question}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCurrentBlock('quiz')}>
          <Image
            source={icon.question}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {renderBlock()}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 18
  },
  icon: {
    width: 40,
    height: 40,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  blockContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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