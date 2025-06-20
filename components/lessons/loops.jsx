import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from "../../contexts/ThemeProvider";
import SingleAnswerTest from './pattern/singleAnswerTest';
import { styles } from '../../constants/lessonStyles';

export default function Loops() {
  const [currentBlock, setCurrentBlock] = useState('theory');
  const { dark, colors } = useTheme();

  const renderBlock = () => {
    switch (currentBlock) {
      case 'theory':
        return (
          <ScrollView style={styles.blockContainer}>
            <Text style={[styles.title, { color: colors.text }]}>Теория: Циклы в JavaScript</Text>

            <Text style={[styles.text, { color: colors.text }]}>
              Циклы позволяют выполнять один и тот же блок кода несколько раз — это основа для автоматизации повторяющихся действий.  
              В JavaScript есть несколько типов циклов, каждый из которых подходит под разные задачи.
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>1. Цикл for</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              Наиболее часто используемый цикл, который содержит три части: инициализация, условие и шаг.  
              Используется, когда известно, сколько раз нужно повторить действия.
            </Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              for (let i = 0; i {"<"} 5; i++) {"{"}{"\n"}
              {"  "}console.log(i); // Выведет числа от 0 до 4{"\n"}
              {"}"}
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>2. Цикл while</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              Выполняет тело цикла, пока условие истинно. Подходит, когда количество итераций заранее неизвестно.  
              Важно, чтобы внутри цикла условие рано или поздно стало ложным, иначе цикл будет бесконечным.
            </Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              let i = 0;{"\n"}
              while (i {"<"} 5) {"{"}{"\n"}
              {"  "}console.log(i);{"\n"}
              {"  "}i++;{"\n"}
              {"}"}
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>3. Цикл do...while</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              Похож на while, но гарантирует выполнение тела цикла хотя бы один раз, так как условие проверяется после выполнения тела.
            </Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              let i = 0;{"\n"}
              do {"{"}{"\n"}
              {"  "}console.log(i);{"\n"}
              {"  "}i++;{"\n"}
              {"}"} while (i {"<"} 5);
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>4. Цикл for...of</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              Используется для перебора элементов итерируемых объектов (например, массивов или строк). Очень удобен для обработки каждого элемента коллекции.
            </Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              const arr = ['яблоко', 'банан', 'вишня'];{"\n"}
              for (let fruit of arr) {"{"}{"\n"}
              {"  "}console.log(fruit);{"\n"}
              {"}"}
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>5. Важные советы</Text>
            <Text style={[styles.text, { color: colors.text }]}>
              - Следи, чтобы условия цикла не создавали бесконечные циклы — они «зависают» и блокируют программу.{"\n"}
              - Используй цикл for, если известно точное число повторений.{"\n"}
              - Используй while или do...while, когда количество повторений зависит от условия во время выполнения.{"\n"}
              - for...of отлично подходит для перебора массивов и других итерируемых объектов.{"\n"}
              - В JavaScript есть также цикл for...in, но он предназначен для перебора свойств объекта — его стоит использовать осторожно с массивами.{"\n"}
              - Можно управлять циклом с помощью break (прекращает цикл) и continue (переходит к следующей итерации).
            </Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>6. Пример с break и continue</Text>
            <Text style={[styles.code, { backgroundColor: colors.background }]}>
              for (let i = 0; i {"<"} 10; i++) {"{"}{"\n"}
              {"  "}if (i === 5) break; // выход из цикла при i === 5{"\n"}
              {"  "}if (i % 2 === 0) continue; // пропустить чётные числа{"\n"}
              {"  "}console.log(i); // выведет 1, 3{"\n"}
              {"}"}
            </Text>

          </ScrollView>
        );

      case 'test1':
        return (
          <SingleAnswerTest
            question="Какой цикл гарантирует выполнение тела хотя бы один раз?"
            options={[
              "1. for",
              "2. while",
              "3. do...while"
            ]}
            correctAnswer={3}
          />
        );

      case 'test2':
        return (
          <SingleAnswerTest
            question="Какой цикл подходит для перебора элементов массива?"
            options={[
              "1. for...in",
              "2. for...of",
              "3. while"
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