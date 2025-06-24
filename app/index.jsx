import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/ThemeProvider";
import { COLORS, TEXTS } from "../constants";
import * as Lessons from "../components/lessons";

import { TestResultsProvider } from '../contexts/TestResultsContext';

const IndexComponent = ({ route, navigation }) => {
  const { colors } = useTheme();
  const currentRoute = route.name;

  const renderScreen = () => {
    switch (currentRoute) {
      case "VariablesAndConstants":
        return <Lessons.VariablesAndConstants />;
      case "DataTypes":
        return <Lessons.DataTypes />;
      case "ArithmeticOperators":
        return <Lessons.ArithmeticOperators />;
      case "ComparisonOperators":
        return <Lessons.ComparisonOperators />;
      case "LogicalOperators":
        return <Lessons.LogicalOperators />;
      case "TernaryOperator":
        return <Lessons.TernaryOperator />;
      case "ConditionalOperators":
        return <Lessons.ConditionalOperators />;
      case "Loops":
        return <Lessons.Loops />;
      case "Functions":
        return <Lessons.Functions />;
      case "Arrays":
        return <Lessons.Arrays />;
      case "Objects":
        return <Lessons.Objects />;
      default:
        return (
          <ScrollView
            style={[styles.container, { backgroundColor: colors.background }]}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            contentContainerStyle={styles.scrollViewContent}
          >
            {Object.entries(TEXTS.EDUCATION).map(([id, lesson]) => (
              <TouchableOpacity
                key={id}
                style={[styles.block, { backgroundColor: colors.primary }]}
                onPress={() => navigation.navigate(lesson.path)}
              >
                <Text style={[styles.blockText, { color: COLORS.EDUCATION.dark_text }]}>
                  {lesson.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
    </View>
  );
};

const Index = (props) => (
  <TestResultsProvider>
    <IndexComponent {...props} />
  </TestResultsProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: 10,
    paddingBottom: 70,
  },
  block: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 16,
    marginHorizontal: 13,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  blockText: {
    fontSize: 18,
    fontFamily: "Rubik-Bold",
  },
});

export default Index;
