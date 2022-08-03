import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import BackGround from "../../components/BackGround";
import { scale } from "react-native-size-matters";
import FormInput from "../../components/FormInput";
import PhoneInput from "../../components/PhoneInput";
const RegisterScreen = () => {
  return (
    <BackGround>
      <ScrollView style={{ width: "90%", marginTop: scale(80) }}>
        <Text
          style={{
            alignSelf: "center",
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
            alignSelf: "center",
          }}
        >
          Create an account to get started with Cargo Express
        </Text>

        <View
          style={{
            width: "100%",
            alignSelf: "center",
          }}
        >
          <FormInput label="Full Name" />
          <FormInput label="Your E-mail" />
          <PhoneInput />
          <FormInput label="Password" />
          <FormInput label="Confirm Password" />
        </View>
      </ScrollView>
    </BackGround>
  );
};

export default RegisterScreen;
