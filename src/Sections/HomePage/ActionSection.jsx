import { View, Text } from "react-native";
import { scale } from "react-native-size-matters";
import Action from "../../components/Action";

const ActionSection = () => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text
        style={{
          fontFamily: "medium",
          fontSize: scale(15),
          marginVertical: 10,
        }}
      >
        Other Actions
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Action
          heading="Waybill History"
          subHeading="Records of all your waybills."
        />
        <Action
          heading="Get Help"
          subHeading="Get help & support from our team"
        />
      </View>
    </View>
  );
};

export default ActionSection;
