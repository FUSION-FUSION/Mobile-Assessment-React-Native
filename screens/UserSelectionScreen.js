import {
    View,
    Text,
    ImageBackground,
    Pressable,
    StyleSheet,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const UserSelectionScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <LinearGradient colors={["#dbe4e9", "#f0f0f3"]} style={{ flex: 1 }}>
                <ImageBackground
                    source={require("../assets/Shipify-Assets/bg-app-cloud.png")}
                    style={styles.background}
                >
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            What kind of user are you?
                        </Text>
                        <Text style={styles.smallerText}>
                            We will adapt the app to suit your needs.
                        </Text>
                    </View>

                    <View style={styles.buttons}>
                        <Pressable
                            style={styles.btn1}
                            onPress={() => navigation.navigate("SignUpScreen")}
                        >
                            <Text style={styles.btnText}>Personal</Text>
                        </Pressable>
                        <Pressable
                            style={styles.btn2}
                            onPress={() => navigation.navigate("SignUpScreen")}
                        >
                            <Text style={styles.btnText}>E-commerce</Text>
                        </Pressable>
                    </View>
                </ImageBackground>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    background: {
        width: "100%",
        height: 300,
        backgroundColor: "#dbe4e9",
    },
    container: {
        paddingTop: 80,
        width: "60%",
        marginLeft: 20,
    },
    text: {
        fontSize: 25,
        fontWeight: "900",
        color: "black",
    },
    smallerText: {
        fontSize: 16,
    },
    buttons: {
        position: "absolute",
        bottom: "-60%",
        width: "100%",
    },
    btn1: {
        backgroundColor: "#46a5ba",
        paddingVertical: 30,
        borderRadius: 20,
        marginHorizontal: 20,
        marginBottom: 30,
    },
    btnText: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 40,
        fontWeight: "900",
    },
    btn2: {
        backgroundColor: "#46a5ba",
        paddingVertical: 30,
        borderRadius: 20,
        marginHorizontal: 20,
    },
});
export default UserSelectionScreen;
