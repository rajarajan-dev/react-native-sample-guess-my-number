import { View, Text, Alert, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import TextInstruction from "../components/ui/TextInstruction";
import { Ionicons } from "@expo/vector-icons";

let minBoundry = 1;
let maxBoundry = 100;

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber, onGameOver }) {
  let initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessList, setGuessList] = useState([]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  function guessNumberHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess;
    }
    let randomNum = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(randomNum);
    setGuessList((guessList) => (guess) => {
      [...guess, randomNum];
    });
  }
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <TextInstruction style={styles.instructionStyle}>
          Guess? Higher or Lower
        </TextInstruction>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNumberHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color={"white"}></Ionicons>
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNumberHandler.bind(this, "higher")}>
              <Ionicons name="add" size={24} color={"white"}></Ionicons>
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  GuessStyle: {
    color: "white",
    textAlign: "center",
    margin: 10,
    fontSize: 15,
  },
  instructionStyle: {
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
  },
  fontSansRegular: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: "white",
  },
  fontSansBold: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    color: "white",
  },
});
