import TodoEdit from "@/components/TodoEdit";
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, View } from "react-native";

type EditScreenParams = {
  title?: string;
  done?: string;
};

const EditScreen = () => {
  const { title, done } = useLocalSearchParams<EditScreenParams>();
  const creation = typeof title !== "string";
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ headerTitle: "Edition", headerBackTitle: "Retour" }}
      />
      <TodoEdit
        creation={creation}
        todo={creation ? undefined : { id: "", title, done: done === "true" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default EditScreen;
