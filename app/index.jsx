import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../config/ThemeProvider';
import { icons } from "../constants/icons.js";
import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    const { colors } = useTheme();
    const icon = {
        help: icons.help,
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    style={[styles.container, { backgroundColor: colors.background }]}
                    showsVerticalScrollIndicator={false}
                >
                    <StatusBar backgroundColor={colors.background} />
                    {/* Блоки для разных тем изучения Python */}
                    <View style={styles.blocksContainer}>
                        <TouchableOpacity style={[styles.block, { backgroundColor: colors.primary }]}>
                            <Text style={[styles.blockText, { color: colors.text }]}>Переменные и типы данных</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.block, { backgroundColor: colors.primary }]}>
                            <Text style={[styles.blockText, { color: colors.text }]}>Операторы</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.block, { backgroundColor: colors.primary }]}>
                            <Text style={[styles.blockText, { color: colors.text }]}>Условные операторы</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.block, { backgroundColor: colors.primary }]}>
                            <Text style={[styles.blockText, { color: colors.text }]}>Структуры данных: Списки</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.block, { backgroundColor: colors.primary }]}>
                            <Text style={[styles.blockText, { color: colors.text }]}>Структуры данных: Кортежи</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.block, { backgroundColor: colors.primary }]}>
                            <Text style={[styles.blockText, { color: colors.text }]}>Структуры данных: Словари</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.block, { backgroundColor: colors.primary }]}>
                            <Text style={[styles.blockText, { color: colors.text }]}>Структуры данных: Множества</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.block, { backgroundColor: colors.primary }]}>
                            <Text style={[styles.blockText, { color: colors.text }]}>Структуры данных: Множества</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50,
        paddingTop: 50
    },
    blocksContainer: {
        //paddingHorizontal: 20,
        paddingBottom: 65,
        //paddingTop: 50,
    },
    block: {
        borderRadius: 10,
        padding: 20,
        marginBottom: 17,
        marginHorizontal: 13,
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
