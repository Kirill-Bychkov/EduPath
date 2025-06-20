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
        parentNavigator: "LessonsStack",
        help: `🔍 Переменные и константы в JavaScript:

- В JavaScript переменные можно объявить тремя способами: через let, const и устаревший var.

✅ let — используется для переменных, значение которых может изменяться:
let x = 5;
x = 10; // допустимо

✅ const — используется для констант, которые нельзя переназначить:
const y = 20;
y = 30; // ❌ ошибка

❌ var — устаревший способ, имеет особенности с областью видимости и может вести к багам, рекомендуется избегать.

📦 Область видимости:
- let и const имеют блочную область видимости — доступны только внутри { }.
- var имеет функциональную область видимости — доступна во всей функции, даже до её объявления.

🧠 Рекомендации:
- По умолчанию используйте const.
- Применяйте let только если значение переменной должно изменяться.
- Не используйте var, если нет острой необходимости.

Пример:
if (true) {
  let a = 1;
  var b = 2;
}
console.log(b); // 2 — доступна
console.log(a); // ❌ ошибка — вне блока

Понимание области видимости и правильный выбор ключевого слова помогает избежать логических ошибок и делает код более предсказуемым.`
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
