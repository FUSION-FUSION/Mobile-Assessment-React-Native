import { View, Text, ScrollView, TextInput } from "react-native";
import { scale } from "react-native-size-matters";
import BackGround from "../../components/BackGround";
import ShipButton from "../../components/ShipButton";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const { navigate } = useNavigation();
  return (
    <BackGround>
      <View
        style={{
          width: "90%",
          marginTop: scale(80),
          marginHorizontal: 20,
        }}
        contentContainerStyle={{
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            lineHeight: 40,
            fontFamily: "regular",
            fontSize: scale(24),
            width: "90%",
          }}
        >
          What kind of user are you?
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
          We will adapt the app to suit your needs.
        </Text>

        <View style={{ height: "100%" }}>
          <ShipButton
            onPress={() => navigate("register")}
            title="Personal"
            style={{ paddingVertical: 0 }}
            textStyle={{
              fontSize: scale(25),
              fontFamily: "bold",
              paddingVertical: scale(30),
            }}
          />

          <ShipButton
            onPress={() => navigate("register")}
            title="E-Commerce"
            style={{ paddingVertical: 0, marginVertical: scale(35) }}
            textStyle={{
              fontSize: scale(25),
              fontFamily: "bold",
              paddingVertical: scale(30),
            }}
          />
        </View>
      </View>
    </BackGround>
  );
};

export default SplashScreen;
