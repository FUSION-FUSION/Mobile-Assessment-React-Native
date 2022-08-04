import { Text, Image, View, ImageBackground } from "react-native";

const TopBar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <Image source={require("../../../assets/images/menu.png")} />
      <Text style={{ fontFamily: "medium", fontSize: 24 }}>Hello, John.</Text>
      <Image source={require("../../../assets/images/bell.png")} />
    </View>
  );
};

export default TopBar;
