import Progress from "../app/progress";
import { Stack, commonStackOptions } from "./config";
import { TestResultsProvider } from "../contexts/TestResultsContext";

export const ProgressStack = () => (
  <TestResultsProvider>
    <Stack.Navigator screenOptions={commonStackOptions}>
      <Stack.Screen
        name="MenuProgress"
        component={Progress}
        options={{ unmountOnBlur: true }}
        initialParams={{
          alias: "Достижения",
          parentNavigator: "RootTabs"
        }}
      />
    </Stack.Navigator>
  </TestResultsProvider>
);
