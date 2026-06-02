import Button from "@/components/Button";
import TodoItem from "@/components/TodoItem";
import { Stack, useRouter } from "expo-router";
import { Platform, ScrollView, StyleSheet } from "react-native";
import { todoItems } from "../../../data/TodoMock";

export default function Index() {
  const router = useRouter();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Stack.Screen
        options={{
          headerTitle: "TODO-list",
          headerRight: () => (
            <Button
              title="Créer"
              onPress={() => router.push("/(tabs)/todo/edit")}
            />
          ),
        }}
      />
      {todoItems.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          done={todo.done}
          onPress={() =>
            router.push({
              pathname: "/(tabs)/todo/edit",
              params: { title: todo.title, done: todo.done.toString() },
            })
          }
        />
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
    paddingBottom: Platform.select({ ios: undefined, android: 64 }),
  },
});
