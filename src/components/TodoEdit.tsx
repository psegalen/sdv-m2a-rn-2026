import { TodoDataItem } from "@/data/TodoMock";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import Button from "./Button";

interface TodoEditProps {
  creation: boolean;
  todo?: TodoDataItem;
}

const TodoEdit = ({ creation, todo }: TodoEditProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {creation ? "Nouvelle Todo" : "Modifier la Todo"}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Tâche à faire"
        value={todo ? todo.title : ""}
      />
      <View style={styles.switchContainer}>
        <Switch value={todo ? todo.done : false} />
        <Text>Fait ?</Text>
      </View>
      <Button title={creation ? "Créer" : "Modifier"} />
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
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
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
