import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import React from "react";
import Card from "../components/Card";

const HomeScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop: 50,
                backgroundColor: "#f8f8fa",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 20,
                    paddingBottom: 20,
                }}
            >
                <Image
                    source={require("../assets/Shipify-Assets/ic-menu.png")}
                />

                <Text>Hello, John.</Text>

                <Image
                    source={require("../assets/Shipify-Assets/ic-notification.png")}
                    style={{ width: 20, height: 20 }}
                />
            </View>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 20,
                    backgroundColor: "#ffffff",
                    paddingVertical: 13,
                    paddingHorizontal: 10,
                    borderRadius: 15,
                }}
            >
                <View>
                    <Text>Total Balance</Text>
                    <Text style={{ fontWeight: "800" }}># 50 000</Text>
                </View>

                <View style={{ position: "relative" }}>
                    <View
                        style={{
                            backgroundColor: "#46a5ba",
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 8,
                            borderRadius: 15,
                            paddingVertical: 5,
                            zIndex: 9999,
                            top: 8,
                        }}
                    >
                        <Text style={{ color: "#ffffff", fontSize: 12 }}>
                            Top Up
                        </Text>
                        <Image
                            source={require("../assets/Shipify-Assets/ic-greater-then.png")}
                            style={{ width: 11, height: 11, marginLeft: 3 }}
                        />
                    </View>
                    <Image
                        source={require("../assets/Shipify-Assets/bg-dashboard-balance.png")}
                        style={{
                            width: "280%",
                            height: "150%",
                            position: "absolute",
                            right: -10,
                            bottom: -17,
                        }}
                    />
                </View>
            </View>

            <View
                style={{
                    marginTop: 20,
                    backgroundColor: "#ffffff",
                    marginHorizontal: 20,
                    paddingVertical: 30,
                    borderRadius: 15,
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        fontWeight: "800",
                        fontSize: 16,
                    }}
                >
                    Track your waybill
                </Text>
                <View style={styles.input}>
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Image
                            source={require("../assets/Shipify-Assets/ic-search.png")}
                            style={{
                                width: 12,
                                height: 12,
                                marginRight: 3,
                            }}
                        />

                        <TextInput placeholder="Waybill Number" />
                    </View>

                    <View
                        style={{
                            backgroundColor: "#46a5ba",
                            paddingVertical: 6,
                            paddingHorizontal: 15,
                            borderRadius: 10,
                            paddingVertical: 8,
                        }}
                    >
                        <Text style={{ color: "#ffffff" }}>Track</Text>
                    </View>
                </View>
            </View>

            <Text>Send a Package</Text>

            <Card />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: "80%",
        borderColor: "#46a5ba",
        borderRadius: 15,
        backgroundColor: "#ffffff",
        textAlign: "left",
        fontSize: 14,
        marginTop: 10,
        borderWidth: 1,
        marginHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 2,
        paddingLeft: 10,
        paddingRight: 2,
    },
});
export default HomeScreen;
