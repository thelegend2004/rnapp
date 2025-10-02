import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

export default function GoalInput({
  onAddGoal,
  isVisible,
  onShowGoalInputModal,
}) {
  const [newGoalText, setNewGoalText] = useState("");

  function handleInputGoal(enteredText) {
    setNewGoalText(enteredText);
  }

  function handleAddGoal() {
    if (newGoalText.length < 1) return;
    onAddGoal(newGoalText);
    setNewGoalText("");
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.jpg')} style={styles.image}/>
        <TextInput
          style={styles.textInput}
          value={newGoalText}
          placeholder="Enter your goal"
          onChangeText={handleInputGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Click to add"
              color="darkgreen"
              onPress={handleAddGoal}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="darkgreen"
              onPress={onShowGoalInputModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "columnn",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "75%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    width: "30%",
  },
});
