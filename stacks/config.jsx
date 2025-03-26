import { createStackNavigator } from "@react-navigation/stack";
import TitleBar from "../components/titleBar";

export const Stack = createStackNavigator();

export const commonStackOptions = ({ route, navigation }) => ({
    header: () => (
      <TitleBar
        route={route}
        navigation={navigation}
      />
    ),
});
