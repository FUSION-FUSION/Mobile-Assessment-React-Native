import {
    View,
    Text,
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Line from "../components/Line";
import Details from "../components/Details";
import UncheckedDetails from "../components/UncheckedDetails";

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
                <View style={styles.header}>
                    <Pressable
                        style={styles.backBtn}
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={require("../assets/Shipify-Assets/left.png")}
                            style={{ width: 20, height: 20 }}
                        />
                    </Pressable>

                    <View style={styles.headerText}>
                        <Text>HN-INT-D9FD00-JBW-ORI</Text>
                    </View>

                    <Text style={{ marginLeft: 15 }}></Text>
                </View>

                <Pressable style={styles.toggleField} onPress={() => toggle()}>
                    <View style={styles.toggleBtn}>
                        <Text></Text>

                        <Image
                            source={require("../assets/Shipify-Assets/line.png")}
                            style={{ width: 50, marginLeft: 10 }}
                        />

                        <Image
                            source={require("../assets/Shipify-Assets/sort.png")}
                        />
                    </View>

                    <View style={styles.position}>
                        <View style={styles.locationFlex}>
                            <Text style={{ color: "#ffffff" }}>Pickup</Text>
                            <Text style={{ color: "#ffffff" }}>
                                Jibowu Terminal
                            </Text>
                            <Text style={{ color: "#abc7ce" }}>
                                Abuja Terminal
                            </Text>
                            <Text style={{ color: "#abc7ce" }}>Completed</Text>
                        </View>

                        <View style={styles.imgPos}>
                            <Image
                                source={require("../assets/Shipify-Assets/round-white.png")}
                                style={{ width: 15, height: 15 }}
                            />
                            <Text style={styles.line}></Text>
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

                        <View style={styles.date}>
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
    header: {
        flexDirection: "row",
        marginLeft: 20,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 55,
        paddingBottom: padding,
    },
    backBtn: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 10,
    },
    headerText: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 25,
        paddingVertical: 8,
        borderRadius: 10,
    },
    toggleField: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 18,
        paddingBottom: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: "90%",
    },
    toggleBtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    position: {
        backgroundColor: "#46a5ba",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    locationFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    imgPos: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    line: {
        borderWidth: 3,
        borderColor: "#ffffff",
        borderBottomWidth: 0,
        borderRightWidth: 0,
        width: 70,
        borderLeftWidth: 0,
        top: 8,
    },
    date: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
});

export default LocationScreen;
