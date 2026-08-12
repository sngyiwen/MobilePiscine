// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const buttonRows = [
  ["7", "8", "9", "C", "AC"],
  ["4", "5", "6", "+", "-"],
  ["1", "2", "3", "*", "/"],
  ["0", ".", "00", "="],
];

function CalcButton({
  label,
  onPress,
}: {
  label: string;
  onPress: (label: string) => void;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(label)}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const handleButtonPress = (label: string) => {
    console.log("button pressed:", label);
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>Calculator</Text>
      </View>

      <View style={styles.displayContainer}>
        <Text style={styles.expressionText}>0</Text>
        <Text style={styles.resultText}>0</Text>
      </View>

      <View style={styles.buttonGrid}>
        {buttonRows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((label) => (
              <CalcButton
                key={label}
                label={label}
                onPress={handleButtonPress}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appBar: {
    height: 60,
    backgroundColor: "#3f51b5",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 35,
  },
  appBarText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  expressionText: {
    fontSize: 24,
    color: "#333",
  },
  resultText: {
    fontSize: 32,
    color: "#000",
    fontWeight: "bold",
  },
  displayContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "grey", // temporary
  },
  buttonGrid: {
    flex: 2,
    justifyContent: "flex-end",
    paddingBottom: 20,
    backgroundColor: "white", // temporary
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 3,
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
});
