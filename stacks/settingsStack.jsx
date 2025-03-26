import Settings from "../app/settings";
import { Stack, commonStackOptions } from "./config";

export const SettingsStack = () => (
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
);
