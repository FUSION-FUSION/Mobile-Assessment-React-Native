import { View, Text, TextInput, Image } from "react-native";
import { verticalScale } from "react-native-size-matters";
import ShipButton from "../../components/ShipButton";
import { useNavigation } from "@react-navigation/native";

const TrackSection = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingVertical: 20,
        borderRadius: 30,
        marginVertical: verticalScale(15),
      }}
    >
      <Text style={{ fontFamily: "medium", fontSize: 20, textAlign: "center" }}>
        Track your waybill
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#46A5BA",
          borderWidth: 1,
          paddingHorizontal: 0,
          borderRadius: 20,
          marginHorizontal: 15,
          marginVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ marginHorizontal: 10 }}
            source={require("../../../assets/images/search.png")}
          />
          <TextInput placeholder="Waybill Number" />
        </View>

        <ShipButton
          onPress={() => navigate("track")}
          title="Track"
          style={{
            width: 80,
            height: 50,
            justifyContent: "center",
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
};

export default TrackSection;
