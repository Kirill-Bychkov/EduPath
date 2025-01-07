import { StyleSheet, SafeAreaView, ScrollView, View, Platform, StatusBar } from "react-native";
import ImageCustom from "../components/game/imageCustom.jsx";
import WrapperImageButton from "../components/game/wrapperImageButton.jsx";
import { useBackToMainMenu, useWindowModal } from "../components/game/actionsMenuGame.jsx";
import { COLORS } from "../constants/colors.js";
import { WindowHeight } from "../components/game/tools.jsx";
import { useEffectGame } from "../components/game/useEffectGame.jsx";
import WindowModal from "../components/game/windowModal.jsx";

export default function Game() {
  const { data, scrollViewRef, windowWidth, handleScroll } = useEffectGame();
  const BackToMainMenu = useBackToMainMenu();
  const { modalVisible, currentLevel, openWindowModal, closeWindowModal } = useWindowModal();

  return (
    <SafeAreaView style={styles.container}>
      <WrapperImageButton
        key={"backTraining"}
        item={data.buttonsMenu.backTraining}
        action={BackToMainMenu}
        absolute={true}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        style={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={handleScroll}
      >
        <View style={{ height: WindowHeight(windowWidth) }}>
          {data.imagesMenu.map(([id, image]) => (
            <ImageCustom key={id} image={image} />
          ))}

          {data.buttonsLevelsMenu.map(([id, level]) => (
            <WrapperImageButton
              key={id}
              item={level}
              action={() => openWindowModal(id)}
              absolute={true}
            />
          ))}
        </View>
      </ScrollView>

      <WindowModal
        visible={modalVisible}
        height={245}
        title={currentLevel.title}
        description={currentLevel.description}
        lookClose={data.buttonsMenu.b_close}
        onClose={closeWindowModal}
        showStartButton={true}
        lookStart={data.buttonsMenu.b_start}
        onStart={() => console.log("Game Started!")}
      />

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
  }
});
