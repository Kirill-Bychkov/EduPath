import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import ButtonCustom from "./buttonCustom";
import Interpreter from "../interpreter";
import BottomSheetLevel from "./bottomSheetLevel";
import { COLORS } from "../../constants";
import { useLevelGame } from "../../hooks/game/useLevelGame";
import { useGoWindow } from "../../hooks/game/useGoWindow";
import { useBackNavigation } from "../../hooks/useBackNavigation";
import { lightColors, imgGame, dmsGame, txtGame } from "../../config";

const LevelGame = ({ route, navigation }) => {
  const { id } = route.params;
  const text = txtGame.bottomsheet[id];

  const { goBack } = useGoWindow(navigation);
  useBackNavigation(() => goBack());

  const {
    scrollViewRef,
    handleScroll,
    interpreterRef,
    runCode,
    bottomSheetRef,
    openBottomSheet
  } = useLevelGame();

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
          props={styles.interpreter}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.leftButtons}>
            <View style={styles.buttonExit}>
              <ButtonCustom
                item={imgGame.buttons.b_exit}
                action={() => goBack()}
              />
            </View>
            <View style={styles.buttonTask}>
              <ButtonCustom
                item={imgGame.buttons.b_task}
                action={openBottomSheet}
              />
            </View>
          </View>

          <View style={styles.rightButton}>
            <ButtonCustom
              item={imgGame.buttons.b_run}
              action={runCode}
            />
          </View>
        </View>
      </ScrollView>

      <BottomSheetLevel
        ref={bottomSheetRef}
        props={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GAME.menu.background
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
