import globalStyles from "@/style/globalStyles";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: "Profil" }} />
      <View style={styles.screenRoot}>
        <Text style={globalStyles.title}>Profil utilisateur</Text>
        <Text>test@test.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  screenRoot: {
    backgroundColor: "#FFF",
    padding: 24,
    gap: 24,
  },
});

export default ProfileScreen;
