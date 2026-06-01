import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import Button from "./Button";

const TodoEdit = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nouvelle Todo</Text>
      <TextInput style={styles.input} placeholder="Tâche à faire" />
      <View style={styles.switchContainer}>
        <Switch />
        <Text>Fait ?</Text>
      </View>
      <Button title="Créer" />
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
