import { View, Image } from "react-native";

export const Plain = () => {
  return (
    <View>
      <Image source={require("../../assets/images/plain.png")} />
    </View>
  );
};

export const Dash = () => {
  return (
    <View>
      <Image source={require("../../assets/images/dashed.png")} />
    </View>
  );
};
