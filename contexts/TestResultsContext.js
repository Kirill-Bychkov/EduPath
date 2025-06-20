import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TestResultsContext = createContext();

export const TestResultsProvider = ({ children }) => {
  const [results, setResults] = useState({});

  useEffect(() => {
    const loadResults = async () => {
      try {
        const saved = await AsyncStorage.getItem('testResults');
        if (saved) {
          setResults(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Ошибка загрузки результатов тестов:', e);
      }
    };

    loadResults();
  }, []);

 const saveResult = async (testId, selectedOption, isCorrect) => {
  try {
    const updated = {
      ...results,
      [testId]: { selectedOption, isCorrect }
    };
    setResults(updated);
    await AsyncStorage.setItem('testResults', JSON.stringify(updated));
  } catch (e) {
    console.error('Ошибка сохранения результата теста:', e);
  }
};

  return (
    <TestResultsContext.Provider value={{ results, saveResult }}>
      {children}
    </TestResultsContext.Provider>
  );
};

export const useTestResults = () => useContext(TestResultsContext);
