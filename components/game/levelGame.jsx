import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import ButtonCustom from "./buttonCustom";
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
import { getRotateInterpolate } from "../../utils/game/rotateInterpolate";

const LevelGame = ({ route, navigation }) => {
  const { id } = route.params;
  const text = txtGame.bottomsheet[id];

  const { goBack } = useGoWindow(navigation);
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
    getLevelAnimations,
    grid,
    foodBacklightVisible,
    foodRef
  } = useLevelGame(dmsLevelGrids[id], openWindowModal);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
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
              { translateY: getLevelAnimations().hedgehog.top },
              { translateX: getLevelAnimations().hedgehog.left },
              { rotate: getRotateInterpolate(
                getLevelAnimations().hedgehog.rotate
              ) }
            ],
            opacity: getLevelAnimations().hedgehog.opacity,
          }}
        />

        {grid.map((row, n) =>
          row.map((cell, m) =>
            cell.objs.map((obj, i) => {
              if (obj === "empty" || obj === "hedgehog") return null;

              const image = {
                ...imgGame.level_images[obj],
                transform: [
                  { translateY: cell.top },
                  { translateX: cell.left },
                  { rotate: "0rad" }
                ],
                opacity: getLevelAnimations().other[`${obj}Opacities`][cell.id]
              };

              return <AnimatedImageCustom key={`${n}-${m}-${i}`} item={image} />;
            })
          )
        )}

        <Interpreter
          ref={interpreterRef}
          props={styles.interpreter}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.leftButtons}>
            <View style={styles.buttonExit}>
              <ButtonCustom
                item={imgGame.buttons.b_exit}
                action={goBack}
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
      
      {!modalVisible ? (
        <BottomSheetLevel
          ref={bottomSheetRef}
          props={text}
        />
      ) : (
        <WindowModal
          height={dmsGame.window_modal.minHeight}
          title={modalContent.title}
          description={modalContent.description}
          onClose={closeWindowModal}
        />
      )}

      <FoodBacklightScreen
        visible={foodBacklightVisible}
        opacity={getLevelAnimations().other.foodBacklightScreenOpacity}
        growRotate={getLevelAnimations().other.growRotate}
        food={foodRef.current}
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: dmsGame.level.paddingHorizontal,
    paddingVertical: dmsGame.level.paddingVertical
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
