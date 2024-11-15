import { StyleSheet, SafeAreaView, ScrollView, View, Platform, StatusBar } from "react-native";
import CustomImage from "../components/game/CustomImage.jsx";
import GameButton from "../components/game/GameButton.jsx";
import { COLORS } from "../constants/colors.js";
import { WindowHeight } from "../components/game/Tools.jsx";
import { useEffectGame } from "../components/game/useEffectGame.jsx";

export default function Game() {
  const { data, scrollViewRef, windowWidth, handleScroll } = useEffectGame();

  return (
    <SafeAreaView style={styles.container}>
      <GameButton key={"backTraining"} item={data.buttonsData.backTraining} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        <View style={{ height: WindowHeight(windowWidth) }}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.game_background,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0
  },
  scrollContent: {
    flex: 1
  }
});
