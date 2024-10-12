import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../config/ThemeProvider';

export default function App() {
    const { colors } = useTheme();

    return (
        <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
            <StatusBar backgroundColor={colors.background} />
            {/* Блоки для разных тем изучения Python */}
            <View style={styles.blocksContainer}>
                <TouchableOpacity style={[styles.block, { backgroundColor: colors.primary }]}>
                    <Text style={[styles.blockText, { color: colors.text }]}>Типы данных</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blocksContainer: {
        padding: 20,
    },
    block: {
        borderRadius: 10,
        padding: 20,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // для тени на Android
    },
    blockText: {
        fontSize: 18,
        fontFamily: 'Rubik-Bold',
    },
});
