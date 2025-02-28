import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../contexts";
import { IMAGES } from "../constants";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {

  const icon = {
    light_mode: IMAGES.EDUCATION.light_mode,
    dark_mode: IMAGES.EDUCATION.dark_mode,
    volume_on: IMAGES.EDUCATION.volume_on,
    volume_off: IMAGES.EDUCATION.volume_off,
  }

  const { dark, colors, setScheme } = useTheme();

  const ToggleTheme = () => {
    setScheme(dark ? 'light' : 'dark');
  }

  const [isSoundOn, setIsSoundOn] = useState(true);

  const ToggleSound = () => {
    setIsSoundOn(!isSoundOn);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.ViewStyle, { backgroundColor: colors.background }]}>
          <Text style={[styles.HeadersTextStyle, { color: colors.header_text }]}>Настройки</Text>
          {/* Переключение темы */}
          <View style={styles.BlockContainer}>
            <Text style={[styles.RegularText, { color: colors.text }]}>Тема:</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={ToggleTheme}>
                <Image
                  source={icon[dark ? 'dark_mode' : 'light_mode']}
                  style={{ width: 50, height: 50, tintColor: dark ? colors.primary : colors.not_active }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* Переключение звука */}
          <View style={styles.BlockContainer}>
            <Text style={[styles.RegularText, { color: colors.text }]}>Звук:</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={ToggleSound}>
                <Image
                  source={icon[isSoundOn ? 'volume_on' : 'volume_off']}
                  style={{ width: 50, height: 50, tintColor: dark ? colors.primary : colors.not_active }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  HeadersTextStyle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    marginBottom: 25,
    marginTop: 4,
  },
  BlockContainer: {
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RegularText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 18,
    marginRight: -42,
    marginLeft: 10,
  },
});

export default Settings;
