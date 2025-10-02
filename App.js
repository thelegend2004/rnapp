import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  function handleShowGoalInputModal() {
    setIsModalVisible((prev) => !prev);
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <Text style={styles.title}>Goal List</Text>
        <Button
          title="Add new goal"
          color="darkgreen"
          onPress={handleShowGoalInputModal}
        />
        <GoalInput
          onAddGoal={handleAddGoal}
          isVisible={isModalVisible}
          onShowGoalInputModal={handleShowGoalInputModal}
        />
        <View style={styles.goalsContainer}>
          <Text>Your goals: </Text>
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
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 24,
    marginBottom: 16,
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,
    backgroundColor: "#e0e0e0",
  },
  goalsContainer: {
    marginTop: 16,
    flex: 5.5,
  },
});
