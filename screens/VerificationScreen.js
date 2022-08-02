import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
const VerificationScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={["#dbe4e9", "#f0f0f3"]}
                // style={{ flex: 1 }}
            >
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
export default VerificationScreen;
