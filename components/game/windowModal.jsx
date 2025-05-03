import { StyleSheet, View, Text, Modal } from "react-native";
import { COLORS } from "../../constants";
import ButtonCustom from "./buttonCustom";
import { dmsGame, imgGame } from "../../config";

const WindowModal = ({
  title,
  description,
  height,
  onClose,
  onStart = () => {},
  showStartButton = false
}) => {
  return (
    <Modal transparent visible animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.modal, { height: height }]}>
          <View style={styles.closeButtonContainer}>
            <ButtonCustom
              item={imgGame.buttons.b_close}
              action={onClose}
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            
            {showStartButton && (
              <View style={styles.startButtonContainer}>
                <ButtonCustom
                  item={imgGame.buttons.b_start}
                  action={onStart}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLORS.GAME.window_modal.back_background,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    backgroundColor: COLORS.GAME.window_modal.background,
    alignItems: "center",
    position: "relative",
    width: dmsGame.window_modal.width,
    borderRadius: dmsGame.window_modal.borderRadius
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%"
  },
  closeButtonContainer: {
    position: "absolute",
    zIndex: 1,
    top: dmsGame.window_modal.topCloseButton,
    left: dmsGame.window_modal.leftCloseButton
  },
  title: {
    fontWeight: "bold",
    color: COLORS.GAME.window_modal.text,
    textAlign: "center",
    fontSize: dmsGame.window_modal.fontSizeTitle,
    lineHeight: dmsGame.window_modal.lineHeightTitle,
    marginTop: dmsGame.window_modal.marginTopTitle
  },
  description: {
    color: COLORS.GAME.window_modal.text,
    textAlign: "center",
    fontSize: dmsGame.window_modal.fontSizeDescription,
    marginBottom: dmsGame.window_modal.marginBottomDescription
  },
  startButtonContainer: {
    marginBottom: dmsGame.window_modal.marginBottomStartButton
  }
});

export default WindowModal;
