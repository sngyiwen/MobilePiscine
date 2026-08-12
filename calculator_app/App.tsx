// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Parser } from "expr-eval";
import { useState } from "react";


const buttonRows = [
  ["7", "8", "9", "C", "AC"],
  ["4", "5", "6", "+", "-"],
  ["1", "2", "3", "*", "/"],
  ["0", ".", "00", "="],
];

const operators = ["+", "-", "*", "/"];


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

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");


  const handleButtonPress = (label: string) => {
    if(label === "AC"){
      setExpression("");
      setResult("0");
    } else if (label === "C") {
      setExpression(expression.slice(0, -1));
    } else if (label === "="){
        console.log("expression being evaluated:", expression);

      try{
        const evalResult = Parser.evaluate(expression);
        if(!isFinite(evalResult)){
          setResult("Error");
        } else {
          setResult(String(evalResult));
        }
      } catch (error){
        setResult("Error");
      }
    } else {
      // setExpression(expression + label);
      if(operators.includes(label)) {
        if(expression == ""){
          if(label === "-") {
            setExpression(label);
          }
        } else {
          const lastChar = expression.slice(-1);
          if(operators.includes(lastChar)){
            setExpression(expression.slice(0, -1) + label);
          } else {
            setExpression(expression + label);
          }
        }
      } else {
        setExpression(expression + label);
      }
    }
  };

  return (
    // banner with title
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>Calculator</Text>
      </View>
    {/* display */}
      <View style={styles.displayContainer}>
        <Text style={styles.expressionText}>{expression || "0"}</Text>
        <Text style={styles.resultText}>{result}</Text>
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
    width: "100%",       // take full width, don't self-size
    textAlign: "right",  // align the text content within that fixed width
  },
  resultText: {
    fontSize: 32,
    color: "#000",
    fontWeight: "bold",
    width: "100%",
    textAlign: "right",
  },
  displayContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-end",
    // alignItems: "stretch",
    backgroundColor: "grey", // temporary
  },
  buttonGrid: {
    flex: 2,
    justifyContent: "space-evenly",
    paddingBottom: 0,
    backgroundColor: "white", // temporary
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 3,
  },
  button: {
    width: 44, //44 works
    height: 44, //44 works
    borderRadius: 22,
    backgroundColor: "#eee",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
});
