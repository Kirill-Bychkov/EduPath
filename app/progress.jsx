import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useTheme } from "../contexts";
import { IMAGES } from "../constants";

const Progress = () => {
  const { colors } = useTheme();

  const icon = {
    achievement: IMAGES.EDUCATION.progress,
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.headersTextStyle, { color: colors.text }]}>Прогресс: 0%</Text>
      
      <View style={styles.achievementsContainer}>
        <Text style={[styles.achievementText, { color: colors.text }]}>Достижения</Text>
        
        <View style={styles.achievementItem}>
          <View style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
            <Image source={icon.achievement} style={styles.icon} />
          </View>
          <Text style={[styles.achievementItemText, { color: colors.text }]}>Закончить раздел 1</Text>
        </View>
        
        <View style={styles.achievementItem}>
          <View style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
            <Image source={icon.achievement} style={styles.icon} />
          </View>
          <Text style={[styles.achievementItemText, { color: colors.text }]}>Закончить раздел 2</Text>
        </View>
        
        <View style={styles.achievementItem}>
          <View style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
            <Image source={icon.achievement} style={styles.icon} />
          </View>
          <Text style={[styles.achievementItemText, { color: colors.text }]}>Закончить раздел 3</Text>
        </View>
        
        <View style={styles.achievementItem}>
          <View style={[styles.iconContainer, { backgroundColor: colors.primary }]}>
            <Image source={icon.achievement} style={styles.icon} />
          </View>
          <Text style={[styles.achievementItemText, { color: colors.text }]}>Закончить раздел 4</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  headersTextStyle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 23,
    marginBottom: 15,
    textAlign: 'center',
  },
  achievementsContainer: {
    marginTop: 10,
  },
  achievementText: {
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
    marginBottom: 15,
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