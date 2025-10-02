import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ goal, onDeleteItem }) {
  return (
    <Pressable
      onPress={() => onDeleteItem(goal.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goal.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: "rgba(190, 205, 192, 1)ff",
  },
  pressedItem: {
    opacity: 0.7,
  },
  goalText: {
    color: "black",
    padding: 8,
  },
});
