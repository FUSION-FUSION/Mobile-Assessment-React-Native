import { View, Text, TextInput } from "react-native";
import { scale } from "react-native-size-matters";

const FormInput = ({ label }) => {
  return (
    <View
      style={{
        marginVertical: 10,
        width: "95%",
        marginHorizontal: 20,
      }}
    >
      <Text style={{ fontFamily: "medium", fontSize: scale(12) }}>{label}</Text>
      <TextInput
        style={{
          backgroundColor: "#FDFEFF",
          padding: scale(11),
          paddingVertical: 7,
          borderRadius: 20,
          marginTop: 3,
        }}
      />
    </View>
  );
};

export default FormInput;
