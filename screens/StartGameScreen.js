import { StyleSheet, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function onTextChangeHandler(text) {
    setEnteredNumber(text);
  }

  function onConfirmInputHanlder() {
    const choosenNumber = parseInt(enteredNumber);

    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      // Show Alert
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: onResetInputHanlder,
          },
        ]
      );
    }
  }

  function onResetInputHanlder() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          value={enteredNumber}
          onChangeText={onTextChangeHandler}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onResetInputHanlder}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={onConfirmInputHanlder}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#640233",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
