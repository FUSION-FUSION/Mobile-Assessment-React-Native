import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import BackGround from "../../components/BackGround";
import { scale } from "react-native-size-matters";
import FormInput from "../../components/FormInput";
import PhoneInput from "../../components/PhoneInput";
import ShipButton from "../../components/ShipButton";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const { navigate } = useNavigation();
  return (
    <BackGround>
      <View
        style={{
          marginTop: scale(50),
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
          Sign In
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
          Sign in to continue to Cargo Express
        </Text>
        <View>
          <FormInput label="Phone Number/E-mail" />
          <FormInput label="Password" />
        </View>

        <TouchableOpacity onPress={() => navigate("register")}>
          <Text
            style={{
              marginLeft: 5,
              fontFamily: "bold",
              color: "#46A5BA",
              fontSize: 18,
              textAlign: "center",
              marginVertical: 40,
            }}
          >
            Create an Account
          </Text>
        </TouchableOpacity>

        <ShipButton
          onPress={() => navigate("home")}
          title="Sign In"
          style={{
            width: 150,
            height: 60,
            borderRadius: 22,
            justifyContent: "center",
          }}
          textStyle={{ fontFamily: "bold", fontSize: 18 }}
        />
      </View>
    </BackGround>
  );
};

export default LoginScreen;
