import { TouchableOpacity, Text } from "react-native";

const ShipButton = ({ children, style, textStyle, onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#46A5BA",
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
        borderRadius: 30,
        ...style,
      }}
      activeOpacity={0.7}
    >
      <Text style={{ color: "#fff", paddingVertical: 50, ...textStyle }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ShipButton;
