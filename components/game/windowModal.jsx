import React from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import { COLORS } from "../../constants";
import ButtonCustom from "./buttonCustom";
import { dmsGame, imgGame } from "../../config";

const WindowModal = ({
  visible,
  title,
  description,
  height,
  onClose,
  onStart,
  showStartButton = false
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
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
    backgroundColor: COLORS.GAME.modal_level.back_background,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    backgroundColor: COLORS.GAME.modal_level.background,
    alignItems: "center",
    position: "relative",
    width: dmsGame.modal_level.width,
    borderRadius: dmsGame.modal_level.borderRadius
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  closeButtonContainer: {
    position: "absolute",
    zIndex: 1,
    top: dmsGame.modal_level.topCloseButton,
    left: dmsGame.modal_level.leftCloseButton
  },
  startButtonContainer: {
    alignItems: "center",
    marginBottom: dmsGame.modal_level.marginBottomStartButton
  },
  title: {
    fontWeight: "bold",
    color: COLORS.GAME.modal_level.text,
    textAlign: "center",
    fontSize: dmsGame.modal_level.fontSizeTitle,
    lineHeight: dmsGame.modal_level.lineHeightTitle,
    marginTop: dmsGame.modal_level.marginTopTitle
  },
  description: {
    color: COLORS.GAME.modal_level.text,
    textAlign: "center",
    fontSize: dmsGame.modal_level.fontSizeDescription,
    marginBottom: dmsGame.modal_level.marginBottomDescription
  }
});

export default WindowModal;
