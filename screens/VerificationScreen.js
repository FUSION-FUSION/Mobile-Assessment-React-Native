import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    Image,
    Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";

const VerificationScreen = ({ navigation }) => {
    const [counter, setCounter] = useState(5);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    const handleTimer = () => {
        counter !== "Code Expired" && setTimeout(() => setCounter(5 - 1), 1000);
    };
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={["#dbe4e8", "#f0f0f3"]} style={{ flex: 1 }}>
                <ImageBackground
                    source={require("../assets/Shipify-Assets/bg-app-cloud.png")}
                    style={styles.background}
                >
                    <View style={styles.headerText}>
                        <Text style={{ fontSize: 24, paddingBottom: 5 }}>
                            Verification!
                        </Text>
                        <Text>
                            We sent you an SMS code on number{" "}
                            <Text
                                style={{ color: "#46a5ba", fontWeight: "700" }}
                            >
                                +2348108960610
                            </Text>
                        </Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput style={styles.input} maxLength={1} />

                        <TextInput style={styles.input} maxLength={1} />

                        <TextInput style={styles.input} maxLength={1} />

                        <TextInput style={styles.input} maxLength={1} />

                        <TextInput style={styles.input} maxLength={1} />
                    </View>
                    <Text style={styles.counterText}>
                        {counter === 0 ? "Code Expired" : counter}
                    </Text>

                    {counter === 0 ? (
                        <Text onPress={() => handleTimer()} style={styles.text}>
                            Resend Code
                        </Text>
                    ) : (
                        <Text style={styles.text}>Resend Code</Text>
                    )}

                    <Pressable
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("CongratVerifiedScreen")
                        }
                    >
                        <Image
                            source={require("../assets/Shipify-Assets/ic-right.png")}
                        />
                    </Pressable>
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
    headerText: {
        width: "50%",
        paddingTop: "30%",
        marginHorizontal: 15,
        paddingBottom: 10,
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
        flexDirection: "row",
        marginHorizontal: 10,
        paddingTop: 10,
    },
    text: {
        textAlign: "center",
        marginTop: 10,
        color: "#2b2c2c",
        fontSize: 20,
        fontWeight: "700",
        paddingBottom: 20,
    },
    counterText: {
        color: "#fa2c2d",
        textAlign: "right",
        width: "82%",
        marginTop: 10,
    },
    button: {
        paddingHorizontal: 25,
        paddingVertical: 13,
        borderRadius: 30,
        backgroundColor: "#46a5ba",
        alignItems: "center",
        marginHorizontal: 160,
    },
});

export default VerificationScreen;
