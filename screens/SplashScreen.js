import { View, Image } from "react-native";
import React from "react";

const SplashScreen = () => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigation.replace("SwiperScreen");
    //     }, 5000);
    // });
    return (
        <View
            style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black",
            }}
        >
            <Image
                source={require("../assets/Shipify-Assets/splash_logo.png")}
            />
        </View>
    );
};

export default SplashScreen;
