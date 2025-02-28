import { SplashScreen, Tabs } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import TabBar from "../components/tabBar";
import { ThemeProvider, LoadingProvider } from "../contexts";
import { FONTS } from "../constants";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const [loaded, error] = useFonts({
    "Rubik-Bold": FONTS['Rubik-Bold'],
    "Rubik-BoldItalic": FONTS['Rubik-BoldItalic'],
    "Rubik-Italic": FONTS['Rubik-Italic'],
    "Rubik-Light": FONTS['Rubik-Light'],
    "Rubik-LightItalic": FONTS['Rubik-LightItalic'],
    "Rubik-Regular": FONTS['Rubik-Regular'],
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
      <LoadingProvider>
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
            name="levelGame"
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
      </LoadingProvider>
    </ThemeProvider>
  )
};

export default RootLayout;
