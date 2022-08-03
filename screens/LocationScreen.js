import {
    View,
    Text,
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Line from "../components/Line";
import Details from "../components/Details";
import UncheckedDetails from "../components/UncheckedDetails";
import { useState } from "react";

const LocationScreen = ({ navigation }) => {
    const [padding, setPadding] = useState("150%");

    const toggle = () => {
        if (padding === "150%") {
            setPadding(0);
        } else if (padding === 0) {
            setPadding("70%");
        } else {
            setPadding("150%");
        }
    };
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
                        paddingBottom: padding,
                    }}
                >
                    <Pressable
                        style={{
                            backgroundColor: "#ffffff",
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            borderRadius: 10,
                        }}
                        onPress={() => navigation.goBack()}
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

                <Pressable
                    style={{
                        backgroundColor: "#ffffff",
                        paddingHorizontal: 18,
                        paddingBottom: 20,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        // paddingBottom: "100%",
                        height: "90%",
                    }}
                    onPress={() => toggle()}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text></Text>
                        <Pressable>
                            <Image
                                source={require("../assets/Shipify-Assets/line.png")}
                                style={{ width: 50, marginLeft: 10 }}
                            />
                        </Pressable>

                        <Pressable>
                            <Image
                                source={require("../assets/Shipify-Assets/sort.png")}
                            />
                        </Pressable>
                    </View>

                    <View
                        style={{
                            backgroundColor: "#46a5ba",
                            paddingVertical: 15,
                            paddingHorizontal: 10,
                            borderRadius: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text style={{ color: "#ffffff" }}>Pickup</Text>
                            <Text style={{ color: "#ffffff" }}>
                                Jibowu Terminal
                            </Text>
                            <Text style={{ color: "#abc7ce" }}>
                                Abuja Terminal
                            </Text>
                            <Text style={{ color: "#abc7ce" }}>Completed</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                // justifyContent: "space-between",
                                alignItems: "center",
                                marginTop: 5,
                            }}
                        >
                            <Image
                                source={require("../assets/Shipify-Assets/round-white.png")}
                                style={{ width: 15, height: 15 }}
                            />
                            <Text
                                style={{
                                    borderWidth: 3,
                                    borderColor: "#ffffff",
                                    borderBottomWidth: 0,
                                    borderRightWidth: 0,
                                    width: 70,
                                    borderLeftWidth: 0,
                                    top: 8,
                                }}
                            ></Text>
                            <Image
                                source={require("../assets/Shipify-Assets/round-white.png")}
                                style={{ width: 15, height: 15 }}
                            />

                            <Line />

                            <Image
                                source={require("../assets/Shipify-Assets/blue.png")}
                                style={{ width: 15, height: 15 }}
                            />

                            <Line />

                            <Image
                                source={require("../assets/Shipify-Assets/blue.png")}
                                style={{ width: 15, height: 15 }}
                            />
                        </View>

                        <View
                            style={{
                                marginTop: 20,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}
                        >
                            <Text style={{ color: "#9ccbd6" }}>
                                04 Mar, 2022
                            </Text>
                            <Text style={{ color: "#9ccbd6" }}>
                                05 Mar, 2022
                            </Text>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: "800" }}>
                            Route Details
                        </Text>

                        <Details />

                        <Details />

                        <UncheckedDetails />

                        <UncheckedDetails />
                    </View>
                </Pressable>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    line: {
        borderWidth: 1,
        borderColor: "#ffffff",
        borderBottomWidth: 0,
        borderRightWidth: 0,
        width: 5,
        borderLeftWidth: 0,
        top: 8,
        marginRight: 2,
    },
});

export default LocationScreen;
