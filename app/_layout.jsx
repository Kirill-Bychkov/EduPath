import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack, Tabs } from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
import TabBar from '../components/TabBar';
//import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [loaded, error] = useFonts({
        "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
        "Rubik-BoldItalic": require("../assets/fonts/Rubik-BoldItalic.ttf"),
        "Rubik-Italic": require("../assets/fonts/Rubik-Italic.ttf"),
        "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
        "Rubik-LightItalic": require("../assets/fonts/Rubik-LightItalic.ttf"),
        "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
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
        <Tabs
        tabBar={props=> <TabBar {...props} />}
        >
          <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title:""
          }}
          />
          <Tabs.Screen
          name="game"
          options={{
            headerShown: false,
            title:""
          }}
          />
          <Tabs.Screen
          name="progress"
          options={{
            headerShown: false,
            title:""
          }}
          />
          <Tabs.Screen
          name="settings"
          options={{
            headerShown: false,
            title:""
          }}
          />
        </Tabs>
        
        
    )
}

export default RootLayout

