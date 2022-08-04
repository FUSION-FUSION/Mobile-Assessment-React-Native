import { Image, View } from "react-native";

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("../../assets/images/icon.png")} />
    </View>
  );
};

export default Splash;
