import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";

const UserSelectionScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("../assets/Shipify-Assets/bg-app-cloud.png")}
                style={{
                    width: "100%",
                    height: 300,
                    backgroundColor: "#dbe4e9",
                }}
            >
                <View style={{ paddingTop: 80, width: "80%", marginLeft: 20 }}>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: "900",
                            color: "black",
                        }}
                    >
                        What kind of user are you?
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                        }}
                    >
                        We will adapt the app to suit your needs.
                    </Text>
                </View>

                <View
                    style={{
                        position: "absolute",
                        bottom: "-60%",
                        width: "100%",
                    }}
                >
                    <Pressable
                        style={{
                            backgroundColor: "#46a5ba",
                            paddingVertical: 30,
                            borderRadius: 20,
                            marginHorizontal: 20,
                            marginBottom: 30,
                        }}
                        onPress={() => navigation.navigate("SignUpScreen")}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                color: "#FFFFFF",
                                fontSize: 40,
                                fontWeight: "900",
                            }}
                        >
                            Personal
                        </Text>
                    </Pressable>
                    <Pressable
                        style={{
                            backgroundColor: "#46a5ba",
                            paddingVertical: 30,
                            borderRadius: 20,
                            marginHorizontal: 20,
                        }}
                        onPress={() => navigation.navigate("SignUpScreen")}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                color: "#FFFFFF",
                                fontSize: 40,
                                fontWeight: "900",
                            }}
                        >
                            E-commerce
                        </Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

export default UserSelectionScreen;
