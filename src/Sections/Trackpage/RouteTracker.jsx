const { View, Text, Image } = require("react-native");
import { scale } from "react-native-size-matters";

const Route = ({ image, heading, subheading, checked }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Image source={image} />
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontFamily: "medium", fontSize: 15 }}>{heading}</Text>
          <Text style={{ fontFamily: "normal", fontSize: 14 }}>
            {subheading}{" "}
          </Text>
        </View>
      </View>
      {checked ? (
        <Image source={require("../../../assets/images/checked.png")} />
      ) : (
        <Image source={require("../../../assets/images/unchecked.png")} />
      )}
    </View>
  );
};

const RouteTracker = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text
        style={{
          fontFamily: "medium",
          fontSize: scale(15),
          marginVertical: 10,
        }}
      >
        Route Details
      </Text>
      <View>
        <Route
          image={require("../../../assets/images/pointer.png")}
          heading="Delivered Successfully"
          subheading="Bishop's Court Owerri"
          checked={true}
        />
        <Route
          image={require("../../../assets/images/pointer.png")}
          heading="Delivered Successfully"
          subheading="Bishop's Court Owerri"
          checked={true}
        />
        <Route
          image={require("../../../assets/images/location.png")}
          heading="Delivered Successfully"
          subheading="Bishop's Court Owerri"
        />
        <Route
          image={require("../../../assets/images/final.png")}
          heading="Delivered Successfully"
          subheading="Bishop's Court Owerri"
        />
      </View>
    </View>
  );
};

export default RouteTracker;
