import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
} from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useEffect } from "react";
const VerificationScreen = () => {
    const [counter, setCounter] = useState(60);
    // const [newCounter, setNewCounter] = useState(9);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
    const handleTimer = () => {
        clearTimeout(counter);
        let counter = 60;
        setTimeout(() => setCounter(counter - 1), 1000);
    };
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={["#dbe4e8", "#f0f0f3"]} style={{ flex: 1 }}>
                <ImageBackground
                    source={require("../assets/Shipify-Assets/bg-app-cloud.png")}
                    style={styles.background}
                >
                    <View
                        style={{
                            width: "50%",
                            paddingTop: 100,
                            marginHorizontal: 15,
                        }}
                    >
                        <Text style={{ fontSize: 24 }}>Verification!</Text>
                        <Text>
                            We sent you an SMS code on number{" "}
                            <Text
                                style={{ color: "#46a5ba", fontWeight: "700" }}
                            >
                                +2348108960610
                            </Text>
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            marginHorizontal: 5,
                            paddingTop: 10,
                        }}
                    >
                        <TextInput style={styles.input} maxLength={1} />

                        <TextInput style={styles.input} maxLength={1} />

                        <TextInput style={styles.input} maxLength={1} />

                        <TextInput style={styles.input} maxLength={1} />

                        <TextInput style={styles.input} maxLength={1} />
                    </View>
                    <Text
                        style={{
                            color: "#fa2c2d",
                            textAlign: "right",
                            width: "82%",
                            marginTop: 5,
                        }}
                    >
                        {counter === 0 ? "Code Expired" : counter}
                    </Text>
                    <Text onPress={() => handleTimer()}>Resend Code</Text>
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
        borderColor: "#555555",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        textAlign: "center",
        fontSize: 14,
        marginTop: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 10,
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
export default VerificationScreen;
