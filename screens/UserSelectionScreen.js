import { View, Text, ImageBackground } from "react-native";
import React from "react";

const UserSelectionScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require("../assets/Shipify-Assets/bg-app-cloud.png")}
                style={{ width: "100%", height: 100 }}
            >
                <View>
                    <Text>What kind of user are you?</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default UserSelectionScreen;
