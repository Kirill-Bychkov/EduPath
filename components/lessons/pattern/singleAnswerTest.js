import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from "../../../contexts";

const SingleAnswerTest = ({ question, options, correctAnswer }) => {
    const { dark, colors } = useTheme();

    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const handleOptionPress = (option) => {
        setSelectedOption(option);
        setIsCorrect(null); // Сбрасываем статус проверки при новом выборе
    };

    // Сбрасываем состояние при изменении вопроса/вариантов
    useEffect(() => {
        setSelectedOption(null);
        setIsCorrect(null);
    }, [question, options, correctAnswer]);

    const handleCheckAnswer = () => {
        if (selectedOption !== null) {
            setIsCorrect(selectedOption === correctAnswer);
        }
    };

    const getOptionStyle = (index) => {
        const optionNumber = index + 1;

        if (isCorrect !== null && selectedOption === optionNumber) {
            return isCorrect ? styles.correctOption : styles.incorrectOption;
        } else if (selectedOption === optionNumber) {
            return styles.selectedOption;
        }
        return styles.option;
    };

    return (
        <View style={styles.blockContainer}>
            <Text style={[styles.question, { color: colors.text }]}>{question}</Text>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={getOptionStyle(index)}
                    onPress={() => handleOptionPress(index + 1)}
                >
                    <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                style={[
                    styles.checkButton,
                    selectedOption === null && styles.disabledButton
                ]}
                onPress={handleCheckAnswer}
                disabled={selectedOption === null}
            >
                <Text style={styles.checkButtonText}>Проверить</Text>
            </TouchableOpacity>
            
            {isCorrect !== null && (
                <Text style={isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect}>
                    {isCorrect ? 'Правильно!' : 'Неправильно! Попробуйте еще раз.'}
                </Text>
            )}

        </View>
    );
};

const styles = StyleSheet.create({
    blockContainer: {
        flex: 1,
        paddingHorizontal: 2,
        paddingVertical: 16,
    },
    question: {
        fontSize: 18,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    option: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    selectedOption: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#b8b6b6',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#b0b0b0',
    },
    correctOption: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#ccffcc',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#00aa00',
    },
    incorrectOption: {
        padding: 15,
        marginVertical: 5,
        backgroundColor: '#ffcccc',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ff0000',
    },
    optionText: {
        fontSize: 16,
    },
    checkButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#007bff',
        borderRadius: 5,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
    checkButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    feedbackCorrect: {
        marginTop: 15,
        color: '#00aa00',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    feedbackIncorrect: {
        marginTop: 15,
        color: '#ff0000',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default SingleAnswerTest;