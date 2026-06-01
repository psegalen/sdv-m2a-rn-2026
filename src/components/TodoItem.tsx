import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { Card } from "react-native-paper";

interface TodoItemProps {
  done: boolean;
  title: string;
}

export default function TodoItem(props: TodoItemProps) {
  const done = props.done;
  const statusText = done ? "Fait" : "A faire";
  const paragraphStyle: StyleProp<TextStyle>[] = [styles.paragraph];
  const containerStyle: StyleProp<ViewStyle>[] = [styles.container];
  if (done) {
    paragraphStyle.push(styles.paragraphDone);
    containerStyle.push(styles.containerDone);
  }
  return (
    <Card style={containerStyle}>
      <Text style={paragraphStyle}>{props.title}</Text>
      <Text>{statusText}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 24,
    width: "100%",
    backgroundColor: "#FFF",
  },
  containerDone: {
    opacity: 0.8,
  },
  paragraph: {
    marginBottom: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  paragraphDone: {
    textDecorationLine: "line-through",
  },
});
