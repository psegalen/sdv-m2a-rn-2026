import { TodoProvider } from "@/data/TodoContext";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <TodoProvider>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </TodoProvider>
  );
}
