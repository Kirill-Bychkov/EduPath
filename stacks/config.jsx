import { createStackNavigator } from "@react-navigation/stack";
import TitleBar from "../components/titleBar";

export const Stack = createStackNavigator();

export const commonStackOptions = ({ route, navigation }) => {
  return {
    headerShown: !["MenuGame", "LevelGame"].includes(route.name),
    header: !["MenuGame", "LevelGame"].includes(route.name)
            ? () => <TitleBar
                      route={route}
                      navigation={navigation}
                    />
            : undefined,
    animation: "fade",
    animationTypeForReplace: "push",
  };
};
