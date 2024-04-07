import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
function PrimaryButton({ children }) {
  function buttonPressed() {
    console.log("Button is pressed");
  }

  return (
    <View style={styles.outsideContainer} >
      <Pressable 
        onPress={buttonPressed} 
        android_ripple={{color: '#f20d80'}}
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
    backgroundColor: "#aa0959",
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
