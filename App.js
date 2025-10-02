import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  function handleAddGoal(newGoalText) {
    setGoals((prev) => [
      ...prev,
      { text: newGoalText, id: Math.random().toString() },
    ]);
  }

  function handleDeleteGoal(id) {
    setGoals((prev) =>
      prev.filter((goal) => {
        if (goal.id !== id) return goal;
      })
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={handleAddGoal} />
      <View style={styles.goalsContainer}>
        <Text>Goals list: </Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            const goal = itemData.item;
            return <GoalItem goal={goal} onDeleteItem={handleDeleteGoal} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,
    backgroundColor: "#e0e0e0",
  },
  goalsContainer: {
    flex: 5.5,
  },
});
