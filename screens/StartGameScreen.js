import { StyleSheet, View, TextInput, Alert, Text  } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";

function StartGameScreen({ updateEnteredNumber }) {
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
      return;
    }
    updateEnteredNumber(choosenNumber);
  }

  function onResetInputHanlder() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.outsideContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.insideContainer}>
        <Text style={styles.instructionStyle}>Enter a number</Text>
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
            <PrimaryButton onPress={onConfirmInputHanlder}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  outsideContainer:{
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  insideContainer: {
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
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
  instructionStyle:{
    color: Colors.accent500,
    fontSize: 24
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
