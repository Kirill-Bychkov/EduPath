import { useKeyboard } from "@react-native-community/hooks";
import { StyleSheet, ScrollView, View } from "react-native";
import ImageButton from "./imageButton";
import ImageCustom from "./imageCustom";
import Interpreter from "../interpreter";
import BottomSheetLevel from "./bottomSheetLevel";
import AnimatedImageCustom from "./animatedImageCustom";
import WindowModal from "./windowModal";
import FoodBacklightScreen from "./foodBacklightScreen";
import { COLORS } from "../../constants";
import { useLevelGame } from "../../hooks/game/useLevelGame";
import { useGoWindow } from "../../hooks/game/useGoWindow";
import { useWindowModal } from "../../hooks/game/useWindowModal";
import { useBottomSheetLevel } from "../../hooks/game/useBottomSheetLevel";
import { useBackNavigation } from "../../hooks/useBackNavigation";
import { lightColors, imgGame, dmsGame, dmsLevelGrids, txtGame } from "../../config";
import { rotateInterpolate } from "../../utils/rotateInterpolate";
import Toast from "react-native-toast-message";

const LevelGame = ({ route, navigation }) => {
  const
    { id } = route.params,
    taskText = txtGame.bottomsheet[id],
    taskConditions = txtGame.level_conditions[id],
    initialGrid = dmsLevelGrids[id];
  
  const renderWindowReasons = {
    incident_field: "incident_field",
    clear_code: "clear_code",
    task_failed: "task_failed",
    items_left: "items_left",
    level_passed: "level_passed",
    game_over: "game_over"
  };

  const keyboard = useKeyboard();

  const { goBack, goNextLevel } = useGoWindow(navigation);
  useBackNavigation(goBack);

  const {
    modalVisible,
    modalContent,
    openWindowModal,
    closeWindowModal
  } = useWindowModal();

  const {
    bottomSheetRef,
    openBottomSheet
  } = useBottomSheetLevel();

  const {
    scrollViewRef,
    interpreterRef,
    handleScroll,
    runCode,
    clearCode,
    copyCode,
    animations,
    grid,
    foodRef,
    foodBacklightVisible,
    isLevelPassed
  } = useLevelGame(
    id,
    taskConditions,
    initialGrid,
    openWindowModal,
    renderWindowReasons
  );

  const renderWindowModal = () => {
    switch (modalContent.type) {
      case renderWindowReasons.incident_field:
      case renderWindowReasons.task_failed:
      case renderWindowReasons.items_left:
        return (
          <WindowModal
            title={modalContent.title}
            description={modalContent.description}
            showCancelButton={false}
            onOk={closeWindowModal}
            textOk={"Ок"}
          />
        );
      case renderWindowReasons.clear_code:
        return (
          <WindowModal
            title={modalContent.title}
            description={modalContent.description}
            onCancel={closeWindowModal}
            textCancel={"Нет"}
            onOk={() => {
              closeWindowModal();
              clearCode();
            }}
            textOk={"Да"}
          />
        );
      case renderWindowReasons.level_passed:
        return (
          <WindowModal
            title={modalContent.title}
            description={modalContent.description}
            onCancel={closeWindowModal}
            textCancel={"Нет"}
            onOk={() => {
              closeWindowModal();
              goNextLevel("LevelGame", { id: id + 1 });
            }}
            textOk={"Да"}
          />
        );
      case renderWindowReasons.game_over:
        return (
          <WindowModal
            title={modalContent.title}
            description={modalContent.description}
            showCancelButton={false}
            onOk={closeWindowModal}
            textOk={"Спасибо!"}
          />
        );
    };
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        <View style={{
          marginBottom: keyboard.keyboardShown
            ? keyboard.keyboardHeight + dmsGame.level.minMarginBottom
            : dmsGame.level.maxMarginBottom
        }}>
          <View style={styles.playingField}>
            <ImageCustom
              key={"playing_field"}
              item={imgGame.level_images.playing_field}
            />
          </View>

          <AnimatedImageCustom
            key={"hedgehog"}
            item={{
              ...imgGame.level_images.hedgehog,
              transform: [
                { translateY: animations.hedgehogTop },
                { translateX: animations.hedgehogLeft },
                { rotate: rotateInterpolate(animations.hedgehogRotate) }
              ],
              opacity: animations.hedgehogOpacity,
            }}
          />

          {grid.flat()
            .filter(cell =>
              cell.obj !== "border" &&
              cell.obj !== "empty" &&
              cell.obj !== "hedgehog")
            .map((cell) => {
              const image = {
                ...imgGame.level_images[cell.obj],
                transform: [
                  { translateY: cell.top },
                  { translateX: cell.left },
                  { rotate: "0rad" }
                ],
                opacity: cell.obj !== "portal" && cell.obj !== "rip"
                  ? animations[`${cell.obj}Opacities`][cell.id]
                  : 1
              };

              return <AnimatedImageCustom key={cell.id} item={image} />;
            })}
          
          <Interpreter
            ref={interpreterRef}
            props={styles.interpreter}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonBar}>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonGroup}>
            <ImageButton
              item={imgGame.buttons.b_exit}
              action={goBack}
            />
            <View style={styles.spacer} />
            <ImageButton
              item={isLevelPassed
                ? imgGame.buttons.b_task_mark
                : imgGame.buttons.b_task}
              action={openBottomSheet}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.buttonGroup}>
            <ImageButton
              item={imgGame.buttons.b_clear}
              action={() => openWindowModal(renderWindowReasons.clear_code)}
            />
            <View style={styles.spacer} />
            <ImageButton
              item={imgGame.buttons.b_copy}
              action={() => {
                copyCode();
                Toast.show({
                  type: "copy",
                  text1: "Код скопирован в буфер обмена",
                  position: "top",
                  visibilityTime: 2000
                });
              }}
            />
          </View>

          <View style={styles.divider} />

          <View>
            <ImageButton
              item={imgGame.buttons.b_run}
              action={runCode}
            />
          </View>
        </View>
      </View>
      
      {!modalVisible
        ? (
          <BottomSheetLevel
            ref={bottomSheetRef}
            props={taskText}
          />
        )
        : renderWindowModal()
      }

      <FoodBacklightScreen
        visible={foodBacklightVisible}
        opacity={animations.foodBacklightScreenOpacity}
        growRotate={animations.growRotate}
        food={foodRef.current}
      />
    </View>
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
  playingField: {
    paddingHorizontal: dmsGame.level.paddingHorizontal,
    paddingVertical: dmsGame.level.paddingVertical
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
  buttonBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.GAME.level.backgroundColorButtonBar,
    justifyContent: "center",
    height: dmsGame.level.heightButtonBar
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: dmsGame.level.paddingHorizontal,
    paddingVertical: dmsGame.level.paddingVertical
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center"
  },
  spacer: {
    width: dmsGame.level.widthSpacer
  },
  divider: {
    width: dmsGame.level.widthDivider,
    height: dmsGame.level.heightDivider,
    backgroundColor: COLORS.GAME.level.backgroundColorDivider
  }
});

export default LevelGame;
