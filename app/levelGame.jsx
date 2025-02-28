import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import ButtonCustom from "../components/game/buttonCustom";
import Interpreter from "../components/interpreter";
import { COLORS, HEIGHT_STATUS_BAR } from "../constants";
import { useLevelGame } from "../hooks/game/useLevelGame";
import { useGoWindow } from "../hooks/game/useGoWindow";
import { lightColors, imgGame, dmsGame } from "../config";

const LevelGame = () => {
  const {
    scrollViewRef,
    handleScroll,
    interpreterRef,
    runCode
  } = useLevelGame();
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
        <Interpreter
          ref={interpreterRef}
          style={styles.interpreter}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.leftButtons}>
            <View style={styles.buttonExit}>
              <ButtonCustom
                key={"b_exit"}
                item={imgGame.buttons.b_exit}
                action={() => goWindow("/game")}
              />
            </View>
            <View style={styles.buttonTask}>
              <ButtonCustom
                key={"b_task"}
                item={imgGame.buttons.b_task}
                action={() => console.log("task")}
              />
            </View>
          </View>
          <View style={styles.rightButton}>
            <ButtonCustom
              key={"b_run"}
              item={imgGame.buttons.b_run}
              action={runCode}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GAME.menu.background,
    paddingTop: HEIGHT_STATUS_BAR
  },
  scrollContent: {
    flex: 1
  },
  interpreter: {
    themeCodeEditor: lightColors.code_editor,
    colorIoText: {
      default: lightColors.text_interpreter,
      success: lightColors.text_success_interpreter,
      error: lightColors.text_error_interpreter
    },
    backgroundColorIoText: lightColors.background_interpreter,
    colorPlaceholder: lightColors.placeholder_interpreter
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: dmsGame.level.paddingHorizontalButtonsContainer,
    paddingVertical: dmsGame.level.paddingVerticalButtonsContainer
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
    paddingEnd: dmsGame.level.paddingEndButtonExit
  },
  buttonTask: {
    alignItems: "center",
    paddingStart: dmsGame.level.paddingStartButtonTask
  }
});

export default LevelGame;
