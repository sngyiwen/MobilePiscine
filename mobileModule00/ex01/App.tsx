//// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default function App() {

const[text, setText] = useState("A simple text");

  const handlePress = () => {
    if (text === "A simple text") {
      setText("Hello World!");
    } else {
      setText("A simple text");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
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