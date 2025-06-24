import { StyleSheet, View, Text, Modal } from "react-native";
import { COLORS } from "../../constants";
import TextButton from "./textButton";
import { dmsGame } from "../../config";

const WindowModal = ({
  title,
  description,
  showCancelButton = true,
  onCancel = () => {},
  textCancel = "",
  onOk,
  textOk
}) => {
  return (
    <Modal transparent visible animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.buttonGroup}>
              {showCancelButton && (
                <TextButton
                  text={textCancel}
                  textStyle={styles.textCancel}
                  backStyle={styles.backCancel}
                  action={onCancel}
                />
              )}
              <TextButton
                text={textOk}
                textStyle={styles.textOk}
                backStyle={styles.backOk}
                action={onOk}
              />
            </View>
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
  modalContainer: {
    flexDirection: "column",
    minWidth: dmsGame.window_modal.minWidth
  },
  textContainer: {
    backgroundColor: COLORS.GAME.window_modal.background,
    alignItems: "center",
    borderRadius: dmsGame.window_modal.borderRadius
  },
  title: {
    fontWeight: "bold",
    color: COLORS.GAME.window_modal.text,
    textAlign: "center",
    fontSize: dmsGame.window_modal.fontSizeTitle,
    lineHeight: dmsGame.window_modal.lineHeightTitle,
    marginVertical: dmsGame.window_modal.marginVerticalTitle,
    marginHorizontal: dmsGame.window_modal.marginHorizontal
  },
  description: {
    color: COLORS.GAME.window_modal.text,
    textAlign: "center",
    fontSize: dmsGame.window_modal.fontSize,
    marginBottom: dmsGame.window_modal.marginBottomDescription,
    marginHorizontal: dmsGame.window_modal.marginHorizontal
  },
  buttonContainer: {
    alignItems: "flex-end"
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: dmsGame.window_modal.gapButtonGroup,
    marginTop: dmsGame.window_modal.marginTopButtonGroup
  },
  textCancel: {
    color: COLORS.GAME.window_modal.textButton,
    fontSize: dmsGame.window_modal.fontSize,
    fontWeight: "medium"
  },
  backCancel: {
    backgroundColor: COLORS.GAME.window_modal.backCancel,
    borderRadius: dmsGame.window_modal.borderRadius,
    width: dmsGame.window_modal.widthBackCancel,
    height: dmsGame.window_modal.heightBackButton
  },
  textOk: {
    color: COLORS.GAME.window_modal.textButton,
    fontSize: dmsGame.window_modal.fontSize,
    fontWeight: "medium"
  },
  backOk: {
    backgroundColor: COLORS.GAME.window_modal.backOk,
    borderRadius: dmsGame.window_modal.borderRadius,
    width: dmsGame.window_modal.widthBackOk,
    height: dmsGame.window_modal.heightBackButton
  }
});

export default WindowModal;
