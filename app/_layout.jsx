import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack, Tabs } from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
import TabBar from '../components/TabBar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from '../config/ThemeProvider';
//import * as SplashScreen from 'expo-splash-screen';
import { fonts } from '../constants/fonts';
import { useTheme } from '../config/ThemeProvider';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const { colors } = useTheme();

  const [loaded, error] = useFonts({
    "Rubik-Bold": fonts['Rubik-Bold'],
    "Rubik-BoldItalic": fonts['Rubik-BoldItalic'],
    "Rubik-Italic": fonts['Rubik-Italic'],
    "Rubik-Light": fonts['Rubik-Light'],
    "Rubik-LightItalic": fonts['Rubik-LightItalic'],
    "Rubik-Regular": fonts['Rubik-Regular'],
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.SafeAreaStyle}>
          <Tabs
            tabBar={props => <TabBar {...props} />}
          >
            <Tabs.Screen
              name="index"
              options={{
                headerShown: false,
                title: "",
              }}
            />
            <Tabs.Screen
              name="game"
              options={{
                headerShown: false,
                title: ""
              }}
            />
            <Tabs.Screen
              name="progress"
              options={{
                headerShown: false,
                title: ""
              }}
            />
            <Tabs.Screen
              name="settings"
              options={{
                headerShown: false,
                title: ""
              }}
            />
          </Tabs>
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  SafeAreaStyle: {
    flex: 1,
    //backgroundColor: "#4b5563",
  }
})

export default RootLayout

