import { View, Text, Image } from "react-native";
import React from "react";

const Card = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                marginHorizontal: 20,
                justifyContent: "space-between",
            }}
        >
            <View
                style={{
                    backgroundColor: "#ffffff",
                    width: "45%",
                    height: "40%",
                }}
            >
                <Text>Same State</Text>
                <Text
                    style={{
                        borderWidth: 2,
                        borderBottomWidth: 0,
                        borderRightWidth: 0,
                        borderLeftWidth: 0,
                        borderColor: "#46a5ba",
                        width: "10%",
                        height: "7%",
                        marginTop: 2,
                    }}
                ></Text>
                <Text>Deliveries within the same state</Text>
                <View style={{ width: "100%" }}>
                    <Image
                        source={require("../assets/Shipify-Assets/ic-road-same-state.png")}
                        style={{ width: "100%", height: "60%" }}
                    />
                    <Image
                        source={require("../assets/Shipify-Assets/ic-bike.png")}
                        style={{
                            width: "53%",
                            height: "45%",
                            top: "-55%",
                        }}
                    />
                </View>
            </View>

            <View style={{ backgroundColor: "#ffffff", width: "45%" }}>
                <Text>Same State</Text>
                <Text
                    style={{
                        borderWidth: 2,
                        borderBottomWidth: 0,
                        borderRightWidth: 0,
                        borderLeftWidth: 0,
                        borderColor: "#46a5ba",
                        width: "5%",
                    }}
                ></Text>
            </View>
        </View>
    );
};

export default Card;
