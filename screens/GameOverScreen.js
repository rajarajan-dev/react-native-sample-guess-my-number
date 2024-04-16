import { View, Text, ImageBackground, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScreen({ guessRounds, userNumber, onGameRestartHandler }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is Over</Title>
      <View style={styles.ImageContainer}>
        <ImageBackground
          style={styles.Image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone took{" "}
        <Text style={styles.summaryHighlight}>{guessRounds}</Text> rounds to
        guess the number{" "}
        <Text style={styles.summaryHighlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onGameRestartHandler}>
        Start a new game
      </PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ImageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderColor: Colors.primary800,
    borderWidth: 5,
    overflow: "hidden",
    marginVertical: 16,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    color: "white",
    marginBottom: 24,
  },
  summaryHighlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary800,
  },
});
