import { TouchableOpacity, Image } from "react-native";

const CircleButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        backgroundColor: "#46A5BA",
        width: 55,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        ...style,
      }}
    >
      <Image source={require("../../assets/images/back.png")} />
    </TouchableOpacity>
  );
};

export default CircleButton;
