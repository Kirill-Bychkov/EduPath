import Progress from "../app/progress";
import { Stack, commonStackOptions } from "./config";

export const ProgressStack = () => (
    <Stack.Navigator screenOptions={commonStackOptions}>
      <Stack.Screen
        name="MenuProgress"
        component={Progress}
        initialParams={{
          alias: "Достижения",
          parentNavigator: "RootTabs"
        }}
      />
    </Stack.Navigator>
);
