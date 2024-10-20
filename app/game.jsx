import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, View, Platform, NativeModules, useWindowDimensions } from "react-native";
import CustomImage from "../components/game/CustomImage.jsx";
import GameButton from "../components/game/GameButton.jsx";
import { COLORS } from "../constants/colors.js";
import { WindowHeight } from "../components/game/Tools.jsx";
import { getButtonsData, getLevelsData, getImagesMenuData } from "../components/game/DataImage.jsx";
import { useRouter } from "expo-router";

export default function Game() {
  const scrollViewRef = useRef(null);
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  const orientation = width > height ? "landscape" : "portrait";
  
  const [data, setData] = useState({
    buttonsData: getButtonsData(router, width),
    levelsData: getLevelsData(width),
    imagesMenuData: getImagesMenuData(width)
  });

  useEffect(() => {
    const newButtonsData = getButtonsData(router, width);
    const newLevelsData = getLevelsData(width);
    const newImagesMenuData = getImagesMenuData(width);

    setData({
      buttonsData: newButtonsData,
      levelsData: newLevelsData,
      imagesMenuData: newImagesMenuData,
    });

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: false });
    }
  }, [orientation]);

  return (
    <SafeAreaView style={styles.container}>
      <GameButton key={"backTraining"} item={data.buttonsData.backTraining} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollContent}
      >
        <View style={{ height: WindowHeight(width) }}>
          {data.imagesMenuData.map(([id, image]) => (
            <CustomImage key={id} image={image} />
          ))}

          {data.levelsData.map(([id, level]) => (
            <GameButton key={id} item={level} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const { StatusBarManager } = NativeModules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.game_background,
    paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0
  },
  scrollContent: {
    flex: 1
  }
});
