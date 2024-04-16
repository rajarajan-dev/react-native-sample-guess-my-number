import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function  Title({children}) {
    return <Text style={styles.textStyle}>
        {children}
    </Text>
}

export default Title;

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 24,
        color: 'white',
        borderColor: 'white',
        fontFamily: 'open-sans-bold',
        borderWidth: 2,
        padding: 10,
        margin: 10,
        textAlign: 'center',
        fontFamily: 'open-sans-bold'
    }
});
