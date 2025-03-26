import { useMemo, forwardRef } from "react";
import { Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetScrollView, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { COLORS } from "../../constants";
import { dmsGame } from "../../config";

const BottomSheetLevel = ({ props }, ref) => {
  const {
    title,
    subtitle_task,
    subtitle_condition,
    subtitle_ps,
    description_task,
    description_condition,
    description_ps
  } = props;

  const snapPoints = useMemo(() => ["90%"], []);

  const renderBackdrop = (props) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.25}
    />
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundStyle={styles.sheetBackground}
      backdropComponent={renderBackdrop}
      enableDynamicSizing={false}
    >
      <BottomSheetScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textSubtitle}>{subtitle_task}</Text>
          <Text style={styles.textDescription}>{description_task}</Text>
          <Text style={styles.textSubtitle}>{subtitle_condition}</Text>
          <Text style={styles.textDescription}>{description_condition}</Text>
          <Text style={styles.textSubtitle}>{subtitle_ps}</Text>
          <Text style={styles.textDescription}>{description_ps}</Text>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: COLORS.GAME.bottomsheet.background,
    borderRadius: dmsGame.bottomsheet.borderRadius,
  },
  scrollContent: {
    alignItems: "flex-start",
    padding: dmsGame.bottomsheet.paddingScrollContent
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: dmsGame.bottomsheet.fontSizeTitle,
    textAlign: "center",
    lineHeight: dmsGame.bottomsheet.lineHeightTitle,
    marginBottom: dmsGame.bottomsheet.marginText,
    alignSelf: "center",
    width: "100%"
  },
  textSubtitle: {
    fontWeight: "bold",
    fontSize: dmsGame.bottomsheet.fontSizeMain,
    textAlign: "left",
    marginVertical: dmsGame.bottomsheet.marginText,
    width: "100%"
  },
  textDescription: {
    fontWeight: "medium",
    fontSize: dmsGame.bottomsheet.fontSizeMain,
    textAlign: "justify",
    width: "100%"
  }
});

export default forwardRef(BottomSheetLevel);
