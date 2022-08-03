import { View, Text, Image } from "react-native";
import React from "react";

const Details = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
            }}
        >
            <View style={{ flexDirection: "row" }}>
                <Image
                    source={require("../assets/Shipify-Assets/round2.png")}
                    style={{
                        backgroundColor: "#8ff0ea",
                        borderRadius: 10,
                        width: 18,
                        height: 18,
                        marginRight: 8,
                    }}
                />
                <View>
                    <Text>Delivered Successfully</Text>
                    <Text>Bishop's Court, Owerri.</Text>
                </View>
            </View>
            <Image source={require("../assets/Shipify-Assets/checkbox.png")} />
        </View>
    );
};

export default Details;
