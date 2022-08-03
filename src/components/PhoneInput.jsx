import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";

const PhoneInput = () => {
  return (
    <View
      style={{
        marginVertical: 10,
      }}
    >
      <Text style={{ fontFamily: "medium", fontSize: scale(12) }}>
        Phone Number
      </Text>
      <View
        style={{
          backgroundColor: "#FDFEFF",
          padding: 10,
          paddingVertical: 7,
          borderRadius: 20,
          marginTop: 3,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 20,
            borderRightWidth: 0.5,
            borderRightColor: "rgba(31,31,31)",
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#fff",
            elevation: 0,
            paddingVertical: 5,
            paddingRight: 10,
          }}
        >
          <Text style={{ fontFamily: "light", marginRight: 5 }}>+234</Text>
          <AntDesign name="caretdown" size={11} color="black" />
        </TouchableOpacity>
        <TextInput />
      </View>
    </View>
  );
};

export default PhoneInput;
