import { View, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("UserSelectionScreen");
        }, 2500);
    });
    return (
        <View style={styles.wrapper}>
            <Image
                source={require("../assets/Shipify-Assets/splash_logo.png")}
                style={{ width: "50%", height: 55 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
});
export default SplashScreen;
