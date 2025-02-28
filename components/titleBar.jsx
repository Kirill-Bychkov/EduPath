import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts";
import { IMAGES } from "../constants";

export default function TitleBar({ currentScreen, setCurrentScreen }) {
  const { dark, colors } = useTheme();

  const icon = {
    help: IMAGES.EDUCATION.help,
    back: IMAGES.EDUCATION.back,
  }

  return (
    <View style={[styles.header, { backgroundColor: colors.bar_background }]}>

      {currentScreen === "index" ? (
        <View style={styles.iconContainer} />
      ) : (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setCurrentScreen("index")}
        >
          <Image
            source={icon.back}
            style={[styles.icon, { tintColor: dark ? colors.primary : colors.not_active }]}
          />
        </TouchableOpacity>
      )}

      <Text style={[styles.title, { color: colors.text }]}>EduPyth</Text>


      <TouchableOpacity style={styles.iconContainer}>
        <Image
          source={IMAGES.EDUCATION.help}
          style={[styles.icon, { tintColor: dark ? colors.primary : colors.not_active }]}
        />
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
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

