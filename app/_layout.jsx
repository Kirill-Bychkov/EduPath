import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabBar from "../components/tabBar";
import { ThemeProvider } from "../contexts/ThemeProvider";
import { LoadingProvider } from "../contexts/LoadingProvider";
import { LessonsStack } from "../stacks/lessonsStack";
import { GameStack } from "../stacks/gameStack";
import { ProgressStack } from "../stacks/progressStack";
import { SettingsStack } from "../stacks/settingsStack";
import { useRootLayout } from "../hooks/useRootLayout";

const Tab = createBottomTabNavigator();

const RootLayout = () => {
  const { loaded, error } = useRootLayout();

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <LoadingProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <Tab.Navigator
              screenOptions={{ headerShown: false }}
              tabBar={(props) => <TabBar {...props} />}
            >
              <Tab.Screen name="Index" component={LessonsStack} />
              <Tab.Screen name="Game" component={GameStack} />
              <Tab.Screen name="Progress" component={ProgressStack} />
              <Tab.Screen name="Settings" component={SettingsStack} />
            </Tab.Navigator>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </LoadingProvider>
    </ThemeProvider>
  );
};

export default RootLayout;
