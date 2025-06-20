import { View, Text, StyleSheet } from "react-native";
import ImageCustom from "./game/imageCustom";
import { imgGame, dmsGame } from "../config";
import { COLORS } from "../constants";

const CopyToast = ({ text1 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconWrapper}>
          <ImageCustom
            key={"check_mark"}
            item={imgGame.level_images.check_mark}
          />
        </View>
        <Text style={styles.text}>{text1}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: COLORS.GAME.copy_toast.background,
    borderRadius: dmsGame.copy_toast.borderRadiusContainer,
    width: dmsGame.copy_toast.widthContainer,
    height: dmsGame.copy_toast.heightContainer,
    marginTop: dmsGame.copy_toast.marginTopContainer,
    shadowColor: COLORS.GAME.copy_toast.shadowColor,
    shadowOffset: {
      width: dmsGame.copy_toast.shadowOffset.width,
      height: dmsGame.copy_toast.shadowOffset.height
    },
    shadowOpacity: dmsGame.copy_toast.shadowOpacity,
    shadowRadius: dmsGame.copy_toast.shadowRadius,
    elevation: dmsGame.copy_toast.elevation
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: dmsGame.copy_toast.paddingLeft
  },
  iconWrapper: {
    paddingRight: dmsGame.copy_toast.paddingRight
  },
  text: {
    color: COLORS.GAME.copy_toast.text,
    fontSize: dmsGame.copy_toast.fontSizeText,
    fontWeight: "medium"
  },
});

export default CopyToast;
