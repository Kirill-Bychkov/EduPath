import { StyleSheet, Text, View, Image } from 'react-native'
import { SplashScreen, Stack, Tabs } from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
import TabBar from '../components/TabBar';
import { ThemeProvider } from '../config/ThemeProvider';
//import * as SplashScreen from 'expo-splash-screen';
import { fonts } from '../constants/fonts';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

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
          <Tabs
            tabBar={props => <TabBar {...props} />}
          >
            <Tabs.Screen
              name="index"
              options={{
                title: "",
                headerShown: false,
              }}
            />
            <Tabs.Screen
              name="game"
              options={{
                headerShown: false,
                title: "",
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
    </ThemeProvider>
  )
}

export default RootLayout

