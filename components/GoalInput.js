import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function GoalInput({ onAddGoal }) {
  const [newGoalText, setNewGoalText] = useState("");

  function handleInputGoal(enteredText) {
    setNewGoalText(enteredText);
  }

  function handleAddGoal() {
    if(newGoalText.length < 1) return;
    onAddGoal(newGoalText);
    setNewGoalText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={newGoalText}
        placeholder="Enter your goal"
        onChangeText={handleInputGoal}
      />
      <Button title="Click to add" color="darkgreen" onPress={handleAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "darkgreen",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
