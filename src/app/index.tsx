import TodoItem from "@/components/TodoItem";
import { ScrollView, StyleSheet } from "react-native";
import { todoItems } from "../data/TodoMock";

export default function Index() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {todoItems.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} done={todo.done} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 16,
  },
});
