import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts";
import { IMAGES } from "../constants";

const TitleBar = ({ route, navigation }) => {
  const { dark, colors } = useTheme();

  const { 
    alias = "", 
    parentNavigator = null,
    showButton = parentNavigator !== "RootTabs"
  } = route.params || {};

  const icon = {
    help: IMAGES.EDUCATION.help,
    back: IMAGES.EDUCATION.back,
  }

  const BackButton = () => (
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={() => navigation.goBack()}
    >
      <Image
        source={icon.back}
        style={[styles.icon, { tintColor: dark ? colors.primary : colors.not_active }]}
      />
    </TouchableOpacity>
  );

  const HelpButton = () => (
    <TouchableOpacity style={styles.iconContainer}>
      <Image
        source={IMAGES.EDUCATION.help}
        style={[styles.icon, { tintColor: dark ? colors.primary : colors.not_active }]}
      />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.header, { backgroundColor: colors.bar_background }]}>
      {showButton && <BackButton />}
      <Text style={[styles.title, { color: colors.text }]}>
        {alias}
      </Text>
      {showButton && <HelpButton />}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  title: {
    fontSize: 22,
    fontFamily: "Rubik-Bold",
    textAlign: "center",
    flex: 1,
  },
  iconContainer: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 36,
    height: 36,
  },
});

export default TitleBar;
