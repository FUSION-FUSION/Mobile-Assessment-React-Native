import { View, Text, ScrollView } from "react-native";

import { scale } from "react-native-size-matters";
import { Dash, Plain } from "../../components/Lines";

const DistanceTracker = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: "#46A5BA",
        borderRadius: 30,
        paddingVertical: 20,
        marginVertical: 30,
      }}
    >
      <View
        style={{
          marginVertical: 20,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <View style={{}}>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "medium",
              marginVertical: 10,
              fontSize: 10,
              width: 100,
            }}
          >
            Pickup
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#fff",
                height: 15,
                width: 15,
                borderRadius: 10,
              }}
            />
            <Plain />
          </View>
        </View>

        <View style={{}}>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "medium",
              marginVertical: 10,
              fontSize: 10,
            }}
          >
            Jibowo Terminal
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#fff",
                height: 15,
                width: 15,
                borderRadius: 10,
              }}
            />
            <Dash />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: "#D6D6D6",
              fontFamily: "medium",
              marginVertical: 10,
              fontSize: 10,
            }}
          >
            Abuja Terminal
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#fff",
                height: 15,
                width: 15,
                borderRadius: 10,
              }}
            />
            <Dash />
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: "#D6D6D6",
              fontFamily: "medium",
              marginVertical: 10,
              fontSize: 10,
            }}
          >
            Collected
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#D6D6D6",
                height: 15,
                width: 15,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DistanceTracker;
