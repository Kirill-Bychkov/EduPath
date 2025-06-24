import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TestResultsContext = createContext();

export const TestResultsProvider = ({ children }) => {
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadResults = async () => {
            try {
                const saved = await AsyncStorage.getItem('testResults');
                if (saved) {
                    setResults(JSON.parse(saved));
                }
            } catch (e) {
                console.error('Ошибка загрузки результатов тестов:', e);
            } finally {
                setLoading(false);
            }
        };

        loadResults();
    }, []);

    // Автосохранение при изменении results
    useEffect(() => {
        const saveToStorage = async () => {
            try {
                await AsyncStorage.setItem('testResults', JSON.stringify(results));
            } catch (e) {
                console.error('Ошибка автоматического сохранения результатов:', e);
            }
        };

        if (!loading) {
            saveToStorage();
        }
    }, [results, loading]);

    // Сохранение одного результата
    const saveResult = async (testId, selectedOption, isCorrect) => {
        const updated = {
            ...results,
            [testId]: { selectedOption, isCorrect },
        };
        setResults(updated);
        return updated;
    };

    // Сброс прогресса
    const resetResults = async () => {
        try {
            await AsyncStorage.removeItem('testResults');
            setResults({});
        } catch (e) {
            console.error('Ошибка сброса результатов тестов:', e);
        }
    };

    return (
        <TestResultsContext.Provider value={{ results, saveResult, setResults, resetResults }}>
            {children}
        </TestResultsContext.Provider>
    );
};

export const useTestResults = () => useContext(TestResultsContext);
