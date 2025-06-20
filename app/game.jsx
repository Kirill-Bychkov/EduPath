import { StyleSheet, ScrollView, View } from "react-native";
import ButtonCustom from "../components/game/buttonCustom";
import ImageCustom from "../components/game/imageCustom";
import WindowModal from "../components/game/windowModal";
import { useGame } from "../hooks/game/useGame";
import { useGoWindow } from "../hooks/game/useGoWindow";
import { useWindowModal } from "../hooks/game/useWindowModal";
import { useBackNavigation } from "../hooks/useBackNavigation";
import { COLORS } from "../constants";
import { WindowHeight } from "../utils/scaleTools";
import { dmsGame, imgGame } from "../config";

const Game = ({ navigation }) => {
  const { scrollViewRef, handleScroll } = useGame();

  const { goWindow, goBack } = useGoWindow(navigation);
  useBackNavigation(goBack);
  
  const {
    modalVisible,
    modalContent,
    openWindowModal,
    closeWindowModal
  } = useWindowModal();
  
  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <ButtonCustom
          item={imgGame.buttons.b_back_training}
          action={goBack}
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
              action={() => openWindowModal("start_level", id)}
              disableOpacity
            />
          ))}
        </View>
      </ScrollView>
      
      {modalVisible && (
        <WindowModal
          height={dmsGame.window_modal.maxHeight}
          title={modalContent.title}
          description={modalContent.description}
          onClose={closeWindowModal}
          showStartButton={true}
          onStart={() => {
            closeWindowModal();
            goWindow("LevelGame", { id: modalContent.id });
          }}
        />
      )}
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
  }
});

export default Game;
