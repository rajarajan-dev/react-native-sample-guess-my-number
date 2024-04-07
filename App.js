import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#640233", "#ddb52f"]} style={styles.container}>
      <ImageBackground 
         source={require('./assets/images/background.png')}
         resizeMode="cover"
         style={styles.container}
         imageStyle = {styles.imageBackground}
         >  
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground:{
    opacity: 0.25
  }
});
