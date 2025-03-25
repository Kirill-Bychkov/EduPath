import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    checkButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 5,
        alignItems: 'center',
    },
    checkButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleBarButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF',
        marginHorizontal: 9
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 12,
    },
    blockContainer: {
        flex: 1,
        marginBottom: 70,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
    code: {
        fontFamily: 'monospace',
        backgroundColor: '#f0f0f0',
        padding: 5,
        borderRadius: 5,
    },
    question: {
        fontSize: 18,
        marginBottom: 20,
    },
    option: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
    },

    optionText: {
        fontSize: 16,
    },
    backButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#FFF',
        fontSize: 16,
    },
});