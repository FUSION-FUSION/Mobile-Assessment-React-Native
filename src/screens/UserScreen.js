import { View, ImageBackground, StyleSheet, Text, Button, Pressable, StatusBar} from "react-native";


const UserScreen = () => {
    return (
      <ImageBackground
        source={require("../../assets/bg-app-cloud.png")}
        style={{ backgroundColor: "#DBE4E9" , flex: 1, height: 240}}
      >
        <View style={styles.container}>
          <Text style={styles.welcometext}>What kind of user are you?</Text>
          <Text style={styles.othertext}>
            We will adapt the app to suit your needs.
          </Text>
        </View>
        <View style={styles.btncontainer}>
          <Pressable style={styles.btn}>
            <Text style={styles.text}>Personal</Text>
          </Pressable>
          <Pressable style={styles.btn}>
            <Text style={styles.text}>E-Commerce</Text>
          </Pressable>
        </View>
      </ImageBackground>
    );
}


const styles = StyleSheet.create({
    btn: {
       alignItems: 'center',
       justifyContent: 'center',
       paddingHorizontal: 32,
       borderRadius: 25,
       elevation: 3,
       backgroundColor: '#46A5BA',
       height: 136,
       marginTop: 40
    },
    btncontainer: {
       paddingHorizontal: 20,
       marginTop: 8
    },
    container: {
        marginTop: 130,
        paddingHorizontal: 20
    },
    othertext: {
        fontSize: 18,
        lineHeight: 26.3,
        color: '#484848',
        fontWeight: "300",
        marginTop: 5
    },
    text: {
        fontSize: 39.,
        lineHeight: 59,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    welcometext: {
        fontWeight: "500",
        fontSize: 28,
        lineHeight: 39,
        color: '#484848'

    }
}) 


export default UserScreen;