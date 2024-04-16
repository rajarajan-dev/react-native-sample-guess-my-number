import { useState, useCallback } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen"
import {useFonts} from "expo-font";



// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  
    
    
    const [gameEnteredNumber, setGameEnteredNumber] = useState("");
    const [isGameOver, setIsGameOver] = useState(false);
    const [guessRounds, setGuessRounds] = useState(0);
    
    const [fontsLoaded] = useFonts({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });

    if (!fontsLoaded) {
      // Font loading is still in progress
      return null;
    }

  

  let screen = (
    <StartGameScreen updateEnteredNumber={updateGameEnteredNumberHandler} />
  );
  if (gameEnteredNumber) {
    screen = <GameScreen userNumber = {gameEnteredNumber} onGameOver = {onGameOver}/>;
  }

  if(isGameOver){
    screen = <GameOverScreen 
    guessRounds={guessRounds} userNumber={gameEnteredNumber} onGameRestartHandler={onGameRestartHandler} /> 
  }

  function onGameOver(roundNumber){
    setIsGameOver(true);
    setGuessRounds(roundNumber);
  }

  function onGameRestartHandler(){
      setGuessRounds(0);
      setGameEnteredNumber(null)
      setIsGameOver(false);
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
