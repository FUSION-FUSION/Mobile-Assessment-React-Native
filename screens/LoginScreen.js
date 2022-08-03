import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TextInput,
    Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.wrapper}>
            <LinearGradient colors={["#dbe4e9", "#f0f0f3"]}>
                <ImageBackground
                    source={require("../assets/Shipify-Assets/bg-app-cloud.png")}
                    style={styles.background}
                >
                    <View style={styles.container}>
                        <Text style={styles.text}>Welcome!</Text>
                        <Text style={styles.smallerText}>
                            Sign in to continue to Cargo Express
                        </Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ fontSize: 15 }}>
                            Phone Number / E-mail
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setEmail(value)}
                            value={email}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ fontSize: 15 }}>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setPassword(value)}
                            value={password}
                        />
                    </View>

                    <Text
                        style={styles.createText}
                        onPress={() => navigation.navigate("SignUpScreen")}
                    >
                        Create an account?
                    </Text>

                    <View
                        style={{
                            paddingTop: 50,
                        }}
                    >
                        <Pressable
                            style={styles.btn2}
                            onPress={() => navigation.navigate("HomeScreen")}
                        >
                            <Text style={styles.btnText2}>Sign In</Text>
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
    },
    container: {
        paddingTop: 100,
        width: "60%",
        marginLeft: 20,
    },
    text: {
        fontSize: 25,
        fontWeight: "900",
        color: "black",
    },
    smallerText: {
        fontSize: 15,
    },
    input: {
        width: "100%",
        borderColor: "#555555",
        borderRadius: 15,
        backgroundColor: "#ffffff",
        textAlign: "left",
        fontSize: 14,
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    inputWrapper: {
        marginHorizontal: 20,
        paddingTop: 20,
    },
    btn2: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 12,
        backgroundColor: "#46a5ba",
        marginHorizontal: 100,
    },
    btnText2: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "900",
    },
    createText: {
        textAlign: "center",
        paddingTop: 20,
        color: "#46a5ba",
        fontWeight: "700",
        fontSize: 16,
    },
});

export default LoginScreen;
