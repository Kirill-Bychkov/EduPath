import { StyleSheet, ScrollView, View } from "react-native";
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
import { rotateInterpolate } from "../../utils/rotateInterpolate";

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
    clearCode,
    copyCode,
    animations,
    grid,
    foodRef,
    foodBacklightVisible
  } = useLevelGame(dmsLevelGrids[id], openWindowModal);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        <View style={styles.viewContent}>
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
            .map((cell, index) => {
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

              return <AnimatedImageCustom key={index} item={image} />;
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
            <ButtonCustom
              item={imgGame.buttons.b_exit}
              action={goBack}
            />
            <View style={styles.spacer} />
            <ButtonCustom
              item={imgGame.buttons.b_task}
              action={openBottomSheet}
            />
          </View>

          <View style={styles.divider} />

          <View style={styles.buttonGroup}>
            <ButtonCustom
              item={imgGame.buttons.b_clear}
              action={clearCode}
            />
            <View style={styles.spacer} />
            <ButtonCustom
              item={imgGame.buttons.b_copy}
              action={copyCode}
            />
          </View>

          <View style={styles.divider} />

          <View>
            <ButtonCustom
              item={imgGame.buttons.b_run}
              action={runCode}
            />
          </View>
        </View>
      </View>
      
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
  viewContent: {
    paddingBottom: dmsGame.level.paddingBottomViewContent
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
