import React from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import { COLORS } from "../../constants/colors.js";
import WrapperImageButton from "./wrapperImageButton.jsx";
import { useWindowDimensions } from "react-native";
import { Responsive } from "./tools.jsx";

const WindowModal = ({
  visible,
  title,
  description,
  width = 340,
  height = 140,
  lookClose,
  onClose,
  lookStart,
  onStart,
  showStartButton = false
}) => {
  const windowWidth = useWindowDimensions().width;

  const paramsDict = {
    widthModal: width,
    heightModal: height,
    borderRadiusModal: 15,
    topCloseButton: -16,
    leftCloseButton: 324,
    fontSizeTitle: 24,
    lineHeightTitle: 35,
    marginTopTitle: 8,
    fontSizeDescription: 18,
    marginBottomDescription: 5,
    marginBottomStartButton: 16
   };

  const updatedParamsDict = Object.fromEntries(
    Object.entries(paramsDict).map(([key, value]) => [key, Responsive(value, windowWidth)])
  );
  
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={[styles.modal,
                      { width: updatedParamsDict.widthModal,
                        height: updatedParamsDict.heightModal,
                        borderRadius: updatedParamsDict.borderRadiusModal }]}>

          <View style={[styles.closeButtonContainer,
                        { top: updatedParamsDict.topCloseButton,
                          left: updatedParamsDict.leftCloseButton }]}>
            <WrapperImageButton
              key={"b_close"}
              item={lookClose}
              action={onClose}
            />
          </View>

          <View style={styles.content}>
            <Text style={[styles.title,
                          { fontSize: updatedParamsDict.fontSizeTitle,
                            lineHeight: updatedParamsDict.lineHeightTitle,
                            marginTop: updatedParamsDict.marginTopTitle }]}>{title}</Text>

            <Text style={[styles.description,
                          { fontSize: updatedParamsDict.fontSizeDescription,
                            marginBottom: updatedParamsDict.marginBottomDescription }]}
            >{description}</Text>
            
            {showStartButton && (
              <View style={[styles.startButtonContainer,
                            { marginBottom: updatedParamsDict.marginBottomStartButton }]}>
                <WrapperImageButton
                  key={"b_start"}
                  item={lookStart}
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
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    backgroundColor: COLORS.window_modal_game,
    alignItems: "center",
    position: "relative"
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  closeButtonContainer: {
    position: "absolute",
    zIndex: 1
  },
  startButtonContainer: {
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    color: COLORS.window_modal_game_text,
    textAlign: "center"
  },
  description: {
    color: COLORS.window_modal_game_text,
    textAlign: "center"
  }
});

export default WindowModal;
