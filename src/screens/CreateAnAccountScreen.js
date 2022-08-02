import { View, ImageBackground, StyleSheet, Text, Button} from "react-native";



const CreateAnAccountScreen = () => {
    return (
        <ImageBackground
          style={styles.background} 
          source={require("../../assets/bg-app-cloud.png")}
        >
            <View style={styles.container}>
                <Text style={styles.welcometext}>Welcome!</Text>
                <Text style={styles.othertext}>Create an account to get started with Cargo Express</Text>
            </View>


            <View style={styles.buttoncontainer}>
                <Button title="Back" />
                <Button title="Next" />
            </View>

        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    buttoncontainer: {
        flexDirection: "row"
    },
    container: {
        marginTop: 100,
    },
    othertext: {
        fontSize: 20
    },
    welcometext: {
        fontWeight: 'bold',
        fontSize: 30
    }
})

export default CreateAnAccountScreen;