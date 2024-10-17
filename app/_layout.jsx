import { StyleSheet, Text, View, Image } from 'react-native'
import { SplashScreen, Stack, Tabs } from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect } from 'react';
import TabBar from '../components/TabBar';
import TitleBar from '../components/TitleBar.jsx';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from '../config/ThemeProvider';
//import * as SplashScreen from 'expo-splash-screen';
import { fonts } from '../constants/fonts';
import { useTheme } from '../config/ThemeProvider';
import { icons } from "../constants/icons.js";
import { TouchableOpacity } from 'react-native';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const { colors } = useTheme();

  const icon = {
    help: icons.help,
  }

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
                headerTitle: (props) => <TitleBar {...props}/>,
                headerShown: true,
                headerTransparent: true,
                //headerTitle: () => (
                //  <Text>EduPyth</Text>
                //),
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

const styles = StyleSheet.create({
  HeaderImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12
  },
  HeadersTextStyle: {
    fontFamily: 'Rubik-Bold',
    fontSize: 24,
  },
})

export default RootLayout

