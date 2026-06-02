import { TodoContext } from "@/data/TodoContext";
import globalStyles from "@/style/globalStyles";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import Button from "./Button";

interface TodoEditProps {
  creation: boolean;
  todoId?: string;
}

const TodoEdit = ({ creation, todoId }: TodoEditProps) => {
  const router = useRouter();
  const { todoList, createTodo, updateTodo } = useContext(TodoContext);
  const todo = creation ? null : todoList.find((item) => item.id === todoId);
  const [newTitle, setNewTitle] = useState(todo ? todo.title : "");
  const [newDone, setNewDone] = useState(todo ? todo.done : false);
  const onPress = () => {
    if (creation) {
      createTodo(newTitle);
    } else {
      updateTodo({ ...todo!, title: newTitle, done: newDone });
    }
    router.back();
  };
  return (
    <View style={styles.container}>
      <Text style={globalStyles.title}>
        {creation ? "Nouvelle Todo" : "Modifier la Todo"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Tâche à faire"
        onChangeText={(newText) => setNewTitle(newText)}
        value={newTitle}
      />
      <View style={styles.switchContainer}>
        <Switch
          value={newDone}
          onValueChange={(newValue) => setNewDone(newValue)}
        />
        <Text>Fait ?</Text>
      </View>
      <Button title={creation ? "Créer" : "Modifier"} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: "100%",
    padding: 24,
    gap: 16,
  },
  input: {
    borderColor: "#AAA",
    borderWidth: 1,
    width: "100%",
    padding: 16,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
  },
});

export default TodoEdit;
