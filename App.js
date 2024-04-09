import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [gameEnteredNumber, setGameEnteredNumber] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  let screen = (
    <StartGameScreen updateEnteredNumber={updateGameEnteredNumberHandler} />
  );
  if (gameEnteredNumber) {
    screen = <GameScreen userNumber = {gameEnteredNumber} onGameOver = {onGameOver}/>;
  }

  if(isGameOver){
    screen = <GameOverScreen /> 
  }

  function onGameOver(){
    setIsGameOver(true);
  }

  function updateGameEnteredNumberHandler(enteredNumber) {
    setGameEnteredNumber(enteredNumber);
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.25,
  },
});
