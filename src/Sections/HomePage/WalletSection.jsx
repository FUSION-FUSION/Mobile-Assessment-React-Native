import {
  Text,
  Image,
  TouchableOpacity,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import { scale } from "react-native-size-matters";

const WalletSection = () => {
  return (
    <ImageBackground
      style={{
        width: "100%",
        padding: 20,
        paddingVertical: 8,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: scale(20),
      }}
      imageStyle={{
        resizeMode: "cover",
        left: scale(50),
      }}
      source={require("../../../assets/images/mask.png")}
    >
      <View>
        <Text style={{ fontFamily: "normal", fontSize: 16, marginTop: 5 }}>
          Total Balance
        </Text>
        <Text style={{ fontFamily: "medium", fontSize: 25, marginVertical: 2 }}>
          ₦ 50,000
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          backgroundColor: "#46A5BA",
          flexDirection: "row",
          borderRadius: 20,
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 15,
        }}
      >
        <Text
          style={{ color: "#fff", fontFamily: "medium", marginHorizontal: 4 }}
        >
          Top up
        </Text>
        <Image source={require("../../../assets/images/skip.png")} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default WalletSection;
