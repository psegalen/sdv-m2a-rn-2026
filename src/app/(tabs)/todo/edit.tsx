import TodoEdit from "@/components/TodoEdit";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

type EditScreenParams = {
  todoId?: string;
};

const EditScreen = () => {
  const { todoId } = useLocalSearchParams<EditScreenParams>();
  const creation = typeof todoId !== "string";
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ headerTitle: "Edition", headerBackTitle: "Retour" }}
      />
      <TodoEdit creation={creation} todoId={todoId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default EditScreen;
