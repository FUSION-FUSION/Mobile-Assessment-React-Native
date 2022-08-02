import { View, ImageBackground, StyleSheet, Text, Pressable} from "react-native";



const CreateAnAccountScreen = () => {
    return (
        <ImageBackground 
          source={require("../../assets/bg-app-cloud.png")}
        >
            <View style={styles.container}>
                <Text style={styles.welcometext}>Welcome!</Text>
                <Text style={styles.othertext}>Create an account to get started with Cargo Express</Text>

                <Text style={styles.othertext}>Already have an account? Log In</Text>
            </View>




            <View style={styles.buttoncontainer}>
                 <Pressable style={styles.backbtn}>
                    <Text style={styles.backtext}>Back</Text>
                </Pressable>
                <Pressable style={styles.nextbtn}>
                    <Text style={styles.nexttext}>Next</Text>
                </Pressable>
            </View>

        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    backbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#f5f5f5',
        height: 50,
        width: 120,
        borderColor: "#fff"
        
    },
    backtext: {
        color: "#484848",
        fontSize: 20,
        lineHeight: 36,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    buttoncontainer: {
        flexDirection: "row",
        paddingHorizontal: 30,
        marginTop: 20
        
    },
    container: {
        marginTop: 130,
        paddingHorizontal: 22
    },
    nextbtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 50 ,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#56A4BA',
        height: 50,
        width: 120
    },
    nexttext: {
        fontSize: 20,
        lineHeight: 36,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    othertext: {
        fontSize: 20,
        color: "#484848",
        lineHeight: 26.3,
        marginTop: 5,
        fontWeight: "300",
        
    },
    welcometext: {
        fontWeight: '500',
        fontSize: 28,
        color: '#484848',
        lineHeight: 39
    }
})

export default CreateAnAccountScreen;