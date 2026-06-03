import globalStyles from "@/style/globalStyles";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  color?: string;
}

const Button = ({ title, onPress, color }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={
        typeof color === "undefined"
          ? styles.buttonContainer
          : [styles.buttonContainer, { backgroundColor: color }]
      }
    >
      <Text style={globalStyles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 8,
    backgroundColor: "#AFA",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default Button;
