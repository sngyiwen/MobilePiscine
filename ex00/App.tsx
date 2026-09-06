import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Button pressed");
  };

  return (
    <View style={styles.container}>
      <Text>A Simple text</Text>
      <Button title="Click me" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});