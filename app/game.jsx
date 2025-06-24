import { StyleSheet, ScrollView, View } from "react-native";
import ImageButton from "../components/game/imageButton";
import ImageCustom from "../components/game/imageCustom";
import WindowModal from "../components/game/windowModal";
import { useGame } from "../hooks/game/useGame";
import { useGoWindow } from "../hooks/game/useGoWindow";
import { useWindowModal } from "../hooks/game/useWindowModal";
import { useBackNavigation } from "../hooks/useBackNavigation";
import { COLORS } from "../constants";
import { WindowHeight } from "../utils/scaleTools";
import { imgGame } from "../config";

const Game = ({ navigation }) => {
  const renderWindowReasons = {
    start_level: "start_level"
  };
  
  const { scrollViewRef, handleScroll } = useGame();

  const { goWindow, goBack } = useGoWindow(navigation);
  useBackNavigation(goBack);
  
  const {
    modalVisible,
    modalContent,
    openWindowModal,
    closeWindowModal
  } = useWindowModal();

  const renderWindowModal = () => {
    switch (modalContent.type) {
      case renderWindowReasons.start_level:
        return (
          <WindowModal
            title={modalContent.title}
            description={modalContent.description}
            onCancel={closeWindowModal}
            textCancel={"Отмена"}
            onOk={() => {
              closeWindowModal();
              goWindow("LevelGame", { id: modalContent.id });
            }}
            textOk={"Запустить"}
          />
        );
    };
  };
  
  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <ImageButton
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
            <ImageButton
              key={id}
              item={level}
              action={() => openWindowModal(renderWindowReasons.start_level, id)}
              disableOpacity
            />
          ))}
        </View>
      </ScrollView>

      {modalVisible && renderWindowModal()}
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
