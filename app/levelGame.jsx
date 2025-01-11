import { StyleSheet, SafeAreaView, ScrollView, View, Platform, StatusBar } from "react-native";
import WrapperImageButton from "../components/game/wrapperImageButton.jsx";
import { COLORS } from "../constants/colors.js";
import { useEffectLevelGame } from "../components/game/useEffectLevelGame.jsx";
import { useGoWindow } from "../components/game/actions.jsx";

export default function LevelGame() {
  const { data, scrollViewRef, handleScroll } = useEffectLevelGame();

  const goWindow = useGoWindow();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >

        <View style={styles.buttonsContainer}>
          <View style={styles.leftButtons}>
            <View style={styles.buttonExit}>
              <WrapperImageButton
                key={"b_exit"}
                item={data.buttonsLevel.b_exit}
                action={() => goWindow("/game")}
              />
            </View>
            <View style={styles.buttonTask}>
              <WrapperImageButton
                key={"b_task"}
                item={data.buttonsLevel.b_task}
                action={() => console.log("task")}
              />
            </View>
          </View>
          <View style={styles.rightButton}>
            <WrapperImageButton
              key={"b_run"}
              item={data.buttonsLevel.b_run}
              action={() => console.log("run")}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.game_background,
    paddingTop: Platform.OS === "android" ? StatusBar?.currentHeight || 20 : 0
  },
  scrollContent: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 15
  },
  leftButtons: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  rightButton: {
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonExit: {
    alignItems: "center",
    paddingEnd: 5
  },
  buttonTask: {
    alignItems: "center",
    paddingStart: 5
  }
});
