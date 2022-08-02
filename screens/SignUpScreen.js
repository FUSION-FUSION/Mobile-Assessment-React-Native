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

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <LinearGradient
                colors={["#dbe4e9", "#f0f0f3"]}
                // style={{ flex: 1 }}
            >
                <ImageBackground
                    source={require("../assets/Shipify-Assets/bg-app-cloud.png")}
                    style={styles.background}
                >
                    <View style={styles.container}>
                        <Text style={styles.text}>Welcome!</Text>
                        <Text style={styles.smallerText}>
                            Create an account to get started with Cargo Express
                        </Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ fontSize: 15 }}>Full Name</Text>
                        <TextInput style={styles.input} />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ fontSize: 15 }}>Your E-mail</Text>
                        <TextInput style={styles.input} />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ fontSize: 15 }}>Phone Number</Text>
                        <TextInput style={styles.input} />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ fontSize: 15 }}>Password</Text>
                        <TextInput style={styles.input} />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={{ fontSize: 15 }}>Confirm Password</Text>
                        <TextInput style={styles.input} />
                    </View>

                    <Text style={{ textAlign: "center", paddingTop: 20 }}>
                        Already have an account?
                        <Text style={{ color: "#46a5ba", fontWeight: "900" }}>
                            {" "}
                            Log in
                        </Text>
                    </Text>

                    <View
                        style={{
                            flexDirection: "row",
                            marginHorizontal: 10,
                            justifyContent: "space-between",
                            paddingTop: 30,
                        }}
                    >
                        <Pressable
                            style={styles.btn1}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.btnText1}>Back</Text>
                        </Pressable>

                        <Pressable
                            style={styles.btn2}
                            onPress={() =>
                                navigation.navigate("VerificationScreen")
                            }
                        >
                            <Text style={styles.btnText2}>Next</Text>
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
        backgroundColor: "#46a5ba",
        paddingVertical: 15,
        borderRadius: 15,
        marginHorizontal: 20,
        width: "30%",
    },
    btn1: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        borderRadius: 15,
        marginHorizontal: 20,
        width: "30%",
    },
    btnText2: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "900",
    },
    btnText1: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "900",
        color: "#737373",
    },
});

export default SignUpScreen;
