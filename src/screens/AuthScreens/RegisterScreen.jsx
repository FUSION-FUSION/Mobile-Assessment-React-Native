import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import BackGround from "../../components/BackGround";
import { scale } from "react-native-size-matters";
import FormInput from "../../components/FormInput";
import PhoneInput from "../../components/PhoneInput";
import ShipButton from "../../components/ShipButton";
import { useNavigation } from "@react-navigation/native";
const RegisterScreen = () => {
  const { goBack, navigate } = useNavigation();
  return (
    <BackGround>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: scale(20),
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
          Welcome!
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
          Create an account to get started with Cargo Express
        </Text>

        <View style={{ height: "100%", marginBottom: 40 }}>
          <FormInput label="Full Name" />
          <FormInput label="Your E-mail" />
          <PhoneInput />
          <FormInput label="Password" />
          <FormInput label="Confirm Password" />

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontFamily: "light" }}>
              Already have an account?
            </Text>
            <TouchableOpacity>
              <Text
                style={{ marginLeft: 5, fontFamily: "light", color: "#46A5BA" }}
              >
                Log In
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 40,
              marginHorizontal: 10,
            }}
          >
            <ShipButton
              onPress={() => {
                goBack();
              }}
              style={{
                width: scale(130),
                height: scale(50),
                justifyContent: "center",
                borderRadius: 20,
                backgroundColor: "#fff",
              }}
              textStyle={{
                fontFamily: "medium",
                fontSize: scale(16),
                color: "#484848",
              }}
              title="Back"
            />
            <ShipButton
              onPress={() => navigate("otp")}
              style={{
                width: scale(130),
                height: scale(50),
                justifyContent: "center",
                borderRadius: 20,
              }}
              textStyle={{ fontFamily: "medium", fontSize: scale(16) }}
              title="Next"
            />
          </View>
        </View>
      </ScrollView>
    </BackGround>
  );
};

export default RegisterScreen;
