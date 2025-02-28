import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import ButtonCustom from "../components/game/buttonCustom";
import ImageCustom from "../components/game/imageCustom";
import WindowModal from "../components/game/windowModal";
import { useGame } from "../hooks/game/useGame";
import { useGoWindow } from "../hooks/game/useGoWindow";
import { useWindowModal } from "../hooks/game/useWindowModal";
import { COLORS, HEIGHT_STATUS_BAR } from "../constants";
import { WindowHeight } from "../utils/scaleTools";
import { goWindowWithCloseModal } from "../utils/game/goWindowWithCloseModal";
import { dmsGame, imgGame } from "../config";

const Game = () => {
  const { scrollViewRef, handleScroll } = useGame();

  const goWindow = useGoWindow();
  
  const {
    modalVisible,
    currentLevel,
    openWindowModal,
    closeWindowModal
  } = useWindowModal();
  const goWindowWithClose = goWindowWithCloseModal(goWindow, closeWindowModal);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ position: "relative" }}>
        <ButtonCustom
          item={imgGame.buttons.b_back_training}
          action={() => goWindow("/")}
        />
      </View>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        <View style={{ height: WindowHeight() }}>
          {Object.entries(imgGame.menu_images).map(([id, image]) => (
            <ImageCustom key={id} item={image} />
          ))}
            
          {Object.entries(imgGame.level_buttons).map(([id, level]) => (
            <ButtonCustom
              key={id}
              item={level}
              action={() => openWindowModal(id)}
              disableOpacity
            />
          ))}
        </View>
      </ScrollView>
      
      <WindowModal
        visible={modalVisible}
        height={dmsGame.modal_level.maxHeight}
        title={currentLevel.title}
        description={currentLevel.description}
        onClose={closeWindowModal}
        showStartButton={true}
        onStart={() => goWindowWithClose("/levelGame")}
      />
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
  }
});

export default Game;
