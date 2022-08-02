import { View, Text, Image } from "react-native";
import React from "react";

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
                }}
            >
                <View>
                    <Text>Total Balance</Text>
                    <Text># 50 000</Text>
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
                            // marginTop: 15,
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
        </View>
    );
};

export default HomeScreen;
