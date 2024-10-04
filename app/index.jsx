//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { useTheme } from '../config/ThemeProvider';


export default function App() {
    const { colors } = useTheme();

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            <StatusBar backgroundColor={colors.background} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});