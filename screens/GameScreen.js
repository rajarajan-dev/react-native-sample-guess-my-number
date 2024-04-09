import { View, Text, Alert, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

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
  let initialGuess = generateRandomBetween(minBoundry, maxBoundry, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  
  useEffect(()=>{
    if(currentGuess === userNumber)  {
      onGameOver();
    }
  },[currentGuess,userNumber,onGameOver]);

  function guessNumberHandler(direction){
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if(direction === 'lower'){
      maxBoundry =  currentGuess;
    }else{
      minBoundry = currentGuess;
    }
    setCurrentGuess(generateRandomBetween(minBoundry, maxBoundry, currentGuess));
  }
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Text style={styles.GuessStyle} > Guess? Higher or Lower</Text>
      <View>
        <PrimaryButton onPress={guessNumberHandler.bind(this,'lower')}>-</PrimaryButton>
        <PrimaryButton onPress={guessNumberHandler.bind(this,'higher')}>+</PrimaryButton>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  GuessStyle :{
    color: 'white',
    textAlign:'center',
    margin: 10,
    fontSize: 15
  }
});
