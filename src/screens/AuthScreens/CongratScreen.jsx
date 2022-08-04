import BackGround from "../../components/BackGround";
import { View, Text, Image } from "react-native";
import ShipButton from "../../components/ShipButton";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
const CongratScreen = () => {
  const { navigate } = useNavigation();
  return (
    <BackGround>
      <View
        style={{
          marginTop: verticalScale(40),
          width: "90%",
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            lineHeight: 40,
            fontFamily: "medium",
            fontSize: scale(24),
            width: "90%",
          }}
        >
          Congratulations!
        </Text>
        <Text
          style={{
            fontFamily: "regular",
            width: "90%",
            color: "#484848",
            fontSize: scale(14),
            marginVertical: 10,
          }}
        >
          Your account has been successfully created.
        </Text>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <Image
            style={{}}
            source={require("../../../assets/images/congrats.png")}
          />
        </View>

        <ShipButton
          onPress={() => navigate("home")}
          title="Continue"
          style={{
            width: 154,
            height: 59,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
          textStyle={{ fontFamily: "medium", fontSize: 18 }}
        />
      </View>
    </BackGround>
  );
};

export default CongratScreen;
