import { View, Text } from "react-native";
import { scale } from "react-native-size-matters";
import Package from "../../components/Package";

const PackageSection = () => {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text
        style={{
          fontFamily: "medium",
          fontSize: scale(15),
          marginVertical: 10,
        }}
      >
        Send a Package
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Package
          heading="Same State"
          subHeading="Deliveries within the same state"
          image={require("../../../assets/images/bike.png")}
        />
        <Package
          heading="Interstate"
          subHeading="Deliveries outside your current state"
          image={require("../../../assets/images/bus.png")}
          dashed={true}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 30,
        }}
      >
        <Package
          heading="Charter"
          subHeading="Request a vehichle"
          image={require("../../../assets/images/truck.png")}
          dashed={true}
        />
      </View>
    </View>
  );
};

export default PackageSection;
