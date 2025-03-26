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
    <Stack.Screen
      name={TEXTS.EDUCATION[2].path}
      component={Lessons.DataTypes}
      initialParams={{
        alias: TEXTS.EDUCATION[2].id,
        parentNavigator: "LessonsStack"
      }}
    />
    <Stack.Screen
      name={TEXTS.EDUCATION[3].path}
      component={Lessons.ArithmeticOperators}
      initialParams={{
        alias: TEXTS.EDUCATION[3].id,
        parentNavigator: "LessonsStack"
      }}
    />
    <Stack.Screen
      name={TEXTS.EDUCATION[4].path}
      component={Lessons.ComparisonOperators}
      initialParams={{
        alias: TEXTS.EDUCATION[4].id,
        parentNavigator: "LessonsStack"
      }}
    />
    <Stack.Screen
      name={TEXTS.EDUCATION[5].path}
      component={Lessons.LogicalOperators}
      initialParams={{
        alias: TEXTS.EDUCATION[5].id,
        parentNavigator: "LessonsStack"
      }}
    />
    <Stack.Screen
      name={TEXTS.EDUCATION[6].path}
      component={Lessons.TernaryOperator}
      initialParams={{
        alias: TEXTS.EDUCATION[6].id,
        parentNavigator: "LessonsStack"
      }}
    />
    <Stack.Screen
      name={TEXTS.EDUCATION[7].path}
      component={Lessons.ConditionalOperators}
      initialParams={{
        alias: TEXTS.EDUCATION[7].id,
        parentNavigator: "LessonsStack"
      }}
    />
  </Stack.Navigator>
);
