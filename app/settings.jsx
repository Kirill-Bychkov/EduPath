import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeProvider";
import { IMAGES } from "../constants";

const Settings = () => {
  const icon = {
    light_mode: IMAGES.EDUCATION.light_mode,
    dark_mode: IMAGES.EDUCATION.dark_mode,
    volume_on: IMAGES.EDUCATION.volume_on,
    volume_off: IMAGES.EDUCATION.volume_off,
  }

  const { dark, colors, setScheme } = useTheme();

  const ToggleTheme = () => {
    setScheme(dark ? "light" : "dark");
  }

  const [isSoundOn, setIsSoundOn] = useState(true);

  const ToggleSound = () => {
    setIsSoundOn(!isSoundOn);
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.BlockContainer}>
        <Text style={[styles.RegularText, { color: colors.text }]}>Тема:</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={ToggleTheme}>
            <Image
              source={icon[dark ? "dark_mode" : "light_mode"]}
              style={{ width: 50, height: 50, tintColor: dark ? colors.primary : colors.not_active }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.BlockContainer}>
        <Text style={[styles.RegularText, { color: colors.text }]}>Звук:</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={ToggleSound}>
            <Image
              source={icon[isSoundOn ? "volume_on" : "volume_off"]}
              style={{ width: 50, height: 50, tintColor: dark ? colors.primary : colors.not_active }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  BlockContainer: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  RegularText: {
    fontFamily: "Rubik-Regular",
    fontSize: 18,
    marginRight: -58,
    marginLeft: 10,
  },
});

export default Settings;
