import Button from "@/components/Button";
import TodoItem from "@/components/TodoItem";
import { TodoContext } from "@/data/TodoContext";
import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const { todoList, isLoading } = useContext(TodoContext);
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
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            done={todo.done}
            onPress={() =>
              router.push({
                pathname: "/(tabs)/todo/edit",
                params: { todoId: todo.id },
              })
            }
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spinnerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    gap: 16,
    paddingBottom: Platform.select({ ios: undefined, android: 64 }),
  },
});
