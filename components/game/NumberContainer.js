import { Text, View,StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function UserNumber({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
}

export default UserNumber;

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    borderRadius: 8,
    borderColor: Colors.accent500,
    borderWidth: 5,
    alignContent:'center',
    justifyContent:'center'
  },
  textStyle: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'

  },
});
