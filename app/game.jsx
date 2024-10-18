import React, { useRef, useEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import CustomImage from "../components/game/CustomImage.jsx";
import GameButton from "../components/game/GameButton.jsx";
import { COLORS } from "../constants/colors.js";
import { getButtonsData, levelsData, imagesMenuData } from "../components/game/DataImage.jsx";
import { useRouter } from "expo-router";

export default function Game() {
  const scrollViewRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  }, []);

  const buttonsData = getButtonsData(router);

  return (
    <SafeAreaView style={styles.container}>
      <GameButton key={"backTraining"} item={buttonsData.backTraining} />

      <ScrollView ref={scrollViewRef} style={styles.scrollContent}>
        {imagesMenuData.map(image => (
          <CustomImage key={image.id} image={image} />
        ))}

        {levelsData.map(level => (
          <GameButton key={level.id} item={level} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.game_background
  },
  scrollContent: {
    flex: 1
  }
});
