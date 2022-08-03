import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import React from "react";

const LocationScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("../assets/Shipify-Assets/map.jpeg")}
                style={{ flex: 1 }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        marginLeft: 20,
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 55,
                    }}
                >
                    <Pressable
                        style={{
                            backgroundColor: "#ffffff",
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderRadius: 10,
                        }}
                    >
                        <Image
                            source={require("../assets/Shipify-Assets/left.png")}
                            style={{ width: 20, height: 20 }}
                        />
                    </Pressable>

                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            paddingHorizontal: 25,
                            paddingVertical: 5,
                            borderRadius: 10,
                        }}
                    >
                        <Text>HN-INT-D9FD00-JBW-ORI</Text>
                    </View>

                    <Text style={{ marginLeft: 15 }}></Text>
                </View>

                <View>
                    <View>
                        <Text></Text>
                        <Image />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default LocationScreen;
