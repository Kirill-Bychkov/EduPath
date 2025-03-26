import Index from "../app/index"
import { Stack, commonStackOptions } from "./config";
import { TEXTS } from "../constants";
import * as Lessons from "../components/lessons";

export const LessonsStack = () => (
  <Stack.Navigator screenOptions={commonStackOptions}>
    <Stack.Screen
      name="MenuIndex"
      component={Index}
      initialParams={{
        alias: "Обучение",
        parentNavigator: "RootTabs"
      }}
    />
    <Stack.Screen
      name={TEXTS.EDUCATION[1].path}
      component={Lessons.VariablesAndConstants}
      initialParams={{
        alias: TEXTS.EDUCATION[1].id,
        parentNavigator: "LessonsStack"
      }}
    />
  </Stack.Navigator>
);
