import Settings from "../app/settings";
import { Stack, commonStackOptions } from "./config";
import { TestResultsProvider } from "../contexts/TestResultsContext";

export const SettingsStack = () => (
  <TestResultsProvider>
    <Stack.Navigator screenOptions={commonStackOptions}>
      <Stack.Screen
        name="MenuSettings"
        component={Settings}
        initialParams={{
          alias: "Настройки",
          parentNavigator: "RootTabs"
        }}
      />
    </Stack.Navigator>
  </TestResultsProvider>
);
