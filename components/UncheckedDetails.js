import { View, Text, Image } from "react-native";
import React from "react";

const UncheckedDetails = () => {
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
                    source={require("../assets/Shipify-Assets/circle.png")}
                    style={{
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
            <Image source={require("../assets/Shipify-Assets/checkbox2.png")} />
        </View>
    );
};

export default UncheckedDetails;
