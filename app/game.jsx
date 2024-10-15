import { StyleSheet, SafeAreaView, View } from 'react-native';
import ImageButton from "../components/ImageButton.jsx";
import { icons } from "../constants/icons.js";
import { COLORS } from '../constants/colors.js';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Game() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ImageButton
        onPress={() => router.push("/")}
        imageStyle={styles.image}
        source={icons.backTraining}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.game_background
  },
  image: {
    width: 73,
    height: 62,
    position: "absolute",
    right: 0
  }
});

