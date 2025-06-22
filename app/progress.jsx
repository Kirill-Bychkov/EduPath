import { StyleSheet, Text, View, Image, ScrollView } from "react-native"; // импортируем ScrollView
import { useTheme } from "../contexts/ThemeProvider";
import { IMAGES, TEXTS } from "../constants";
import { useTestResults } from "../contexts/TestResultsContext";

import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

const Progress = () => {
  const { colors } = useTheme();
  const { results } = useTestResults();

  useFocusEffect(
    useCallback(() => {
      //console.log("Экран прогресса активен");
    }, [results]) // results в зависимости
  );

  //console.log("Results:", results);
  //console.log("Lesson IDs:", Object.values(TEXTS.EDUCATION).map(l => l.id));
  //console.log("Results keys:", Object.keys(results));

  const icon = {
    achievement: IMAGES.EDUCATION.progress,
  };

  const totalLessons = Object.keys(TEXTS.EDUCATION).length;

  const completedLessons = Object.values(TEXTS.EDUCATION).filter(lesson => {
    //console.log('Пересчёт completedLessons:', completedLessons);
    //console.log('Results внутри Progress:', results);
    if (!lesson.resultKeys) return false;
    return lesson.resultKeys.every(key => results[key]?.isCorrect === true);
  }).length;


  const progressPercent = Math.round((completedLessons / totalLessons) * 100);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.headersTextStyle, { color: colors.text }]}>
        Прогресс: {progressPercent}%
      </Text>

      <ScrollView style={styles.scrollContainer}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {Object.values(TEXTS.EDUCATION).map((lesson) => {
          const isCompleted = lesson.resultKeys?.every(key => results[key]?.isCorrect === true);
          return (
            <View key={lesson.id} style={styles.achievementItem}>
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: isCompleted ? "#4CAF50" : colors.primary,
                  },
                ]}
              >
                <Image source={icon.achievement} style={styles.icon} />
              </View>
              <Text style={[styles.achievementItemText, { color: colors.text }]}>
                {lesson.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 25,
  },
  headersTextStyle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 23,
    marginBottom: 15,
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 5,
    marginBottom: 20
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  achievementItemText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    flex: 1,
  },
});

export default Progress;