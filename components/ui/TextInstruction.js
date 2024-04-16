import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function TextInstruction({ children, style }) {
  return <Text style={[styles.instructionStyle, style]}>{children}</Text>;
}

export default TextInstruction;

const styles = StyleSheet.create({
  instructionStyle: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'open-sans'
  },
});
