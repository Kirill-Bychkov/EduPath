import Game from "../app/game";
import LevelGame from "../components/game/levelGame";
import { Stack } from "./config";

export const GameStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MenuGame" component={Game} />
        <Stack.Screen name="LevelGame" component={LevelGame} />
    </Stack.Navigator>
);
