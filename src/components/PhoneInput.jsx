import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";

const PhoneInput = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        width: "95%",
        marginHorizontal: 20,
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
            borderColor: 1,
            borderColor: "rgba(31,31,31)",
            padding: 9,
          }}
        >
          <Text style={{ fontFamily: "light", letterSpacing: 1 }}>+234</Text>
        </TouchableOpacity>
        <TextInput />
      </View>
    </View>
  );
};

export default PhoneInput;
