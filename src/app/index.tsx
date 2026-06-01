import Button from "@/components/Button";
import TodoEdit from "@/components/TodoEdit";
import TodoItem from "@/components/TodoItem";
import { useState } from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { todoItems } from "../data/TodoMock";

export default function Index() {
  const [isCreating, setIsCreating] = useState(false);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Button
        title="Créer une Todo"
        onPress={() => setIsCreating(!isCreating)}
      />
      {isCreating ? (
        <TodoEdit />
      ) : (
        todoItems.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} done={todo.done} />
        ))
      )}
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
    paddingBottom: Platform.select({ ios: undefined, android: 64 }),
  },
});
