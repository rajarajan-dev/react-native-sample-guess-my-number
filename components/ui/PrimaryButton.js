import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Colors";
function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.outsideContainer} >
      <Pressable 
        onPress={onPress} 
        android_ripple={{color: Colors.primary600}}
        style={({pressed})=>
         pressed ? 
         [styles.insideContainer, styles.buttonPressed]
          : styles.insideContainer
        }
        >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default PrimaryButton;

const styles = StyleSheet.create({
  outsideContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden"
  },
  insideContainer: {
    paddingVertical: 8,
    elevation: 2,
    backgroundColor: Colors.primary500,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: 'open-sans'
  },
  pressed: {
    opacity: 0.75,
  },
});
