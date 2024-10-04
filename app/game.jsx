import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react'
import { useTheme } from '../config/ThemeProvider';

const Game = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.HeadersTextStyle, { color: colors.header_text }]}>Скоро будет доступна...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeadersTextStyle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 23,
    marginBottom: 25,
    marginTop: 4,
  },
});

export default Game