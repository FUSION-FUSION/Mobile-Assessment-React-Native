import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
    Pressable,
} from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";

const CongratVerifiedScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={["#dbe4e8", "#f0f0f3"]} style={{ flex: 1 }}>
                <ImageBackground
                    source={require("../assets/Shipify-Assets/bg-app-cloud.png")}
                    style={styles.background}
                >
                    <View style={styles.headerText}>
                        <Text style={{ fontSize: 24, paddingBottom: 5 }}>
                            Congratulations!
                        </Text>
                        <Text>Your account has been successfully created</Text>
                    </View>

                    <View
                        style={{
                            alignItems: "center",
                            paddingTop: "20%",
                        }}
                    >
                        <Image
                            source={require("../assets/Shipify-Assets/ic-congratulations.png")}
                            style={{
                                width: "64%",
                                height: "100%",
                            }}
                        />
                    </View>

                    <Pressable style={styles.button}>
                        <Text style={styles.btnText}>Continue</Text>
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
        width: "60%",
        paddingTop: "30%",
        marginHorizontal: 15,
        paddingBottom: 10,
    },
    button: {
        paddingHorizontal: 25,
        paddingVertical: 13,
        borderRadius: 12,
        backgroundColor: "#46a5ba",
        marginHorizontal: 100,
        marginTop: 50,
    },
    btnText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 18,
    },
});
export default CongratVerifiedScreen;
