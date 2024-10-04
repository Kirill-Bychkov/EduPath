import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTheme } from '../config/ThemeProvider'
import { icons } from "../constants/icons.js";
import { COLORS } from '../constants/colors.js';

const Settings = () => {

  const icon = {
    light_mode: icons.light_mode,
    dark_mode: icons.dark_mode
  }

  const { dark, colors, setScheme } = useTheme();

  const ToggleTheme = () => {
    setScheme(dark ? 'light' : 'dark');
  }

  return (
    <View style={[styles.ViewStyle, { backgroundColor: colors.background }]}>
      <Text style={[styles.HeadersTextStyle, { color: colors.header_text }]}>Настройки</Text>

      <View style={styles.themeContainer}>
        <Text style={[styles.RegularText, { color: colors.text }]}>Тема:</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={ToggleTheme}>
            <Image
              source={icon[dark ? 'dark_mode' : 'light_mode']}
              style={{ width: 50, height: 50, tintColor: dark ? COLORS.primary : COLORS.not_active }}
            />
          </TouchableOpacity>
        </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  HeadersTextStyle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
    //color: colors.text
    marginBottom: 25,
    marginTop: 4,
  },
  themeContainer: {
    flexDirection: 'row',
    //justifyContent: 'center',
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
})

export default Settings