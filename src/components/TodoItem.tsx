import globalStyles from "@/style/globalStyles";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { Card } from "react-native-paper";

interface TodoItemProps {
  done: boolean;
  title: string;
  onPress: () => void;
}

export default function TodoItem(props: TodoItemProps) {
  const done = props.done;
  const statusText = done ? "Fait" : "A faire";
  const paragraphStyle: StyleProp<TextStyle>[] = [globalStyles.title];
  const containerStyle: StyleProp<ViewStyle>[] = [styles.container];
  if (done) {
    paragraphStyle.push(styles.paragraphDone);
    containerStyle.push(styles.containerDone);
  }
  return (
    <Card style={containerStyle} onPress={props.onPress}>
      <View style={styles.itemRoot}>
        <Text style={paragraphStyle}>{props.title}</Text>
        <Text>{statusText}</Text>
      </View>
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
  itemRoot: {
    gap: 16,
  },
  containerDone: {
    opacity: 0.8,
  },
  paragraphDone: {
    textDecorationLine: "line-through",
  },
});
