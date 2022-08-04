import { View, Text, StyleSheet, Image, Pressable } from "react-native"
import { ImageBackground } from "react-native";

const AccountCreatedSuccesfully = () => {
    return (
      <ImageBackground
        source={require("../../assets/bg-app-cloud.png")}
        style={{ backgroundColor: "#DBE4E9", flex: 1, height: 240}}
      >
        <View style={styles.container}>
          <Text style={styles.congratsText}>Congratulations!</Text>
          <Text style={styles.congratsMsg}>
            Your account has been successfully created.
          </Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../assets/ic-congratulations.png")}
            style={styles.img}
          />
        </View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.continueBtn}>
            <Text style={styles.continueText}>Continue</Text>
          </Pressable>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 130,
        paddingHorizontal: 22
    },
    congratsText: {
        fontWeight: '500',
        fontSize: 28,
        color: '#484848',
        lineHeight: 39
    },
    congratsMsg: {
        fontSize: 18,
        color: "#484848",
        lineHeight: 26.3,
        marginTop: 5,
        fontWeight: "300",
    },
    continueBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 100 ,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
        backgroundColor: '#56A4BA',
        height: 50,
        width: 150,
       
    },
    continueText: {
        fontSize: 18,
        lineHeight: 36,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    img: {
        width: 300,
        height: 300
    },
    imgContainer: {
        marginVertical: 40,
        justifyContent: "center",
        alignItems: "center",
        width: 310,
        height: 310,
        marginLeft: 28

    }

})

export default AccountCreatedSuccesfully;