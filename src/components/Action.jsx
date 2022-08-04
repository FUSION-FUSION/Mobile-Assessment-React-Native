import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Line from "./line";

const Action = ({ heading, subHeading, image, dashed }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: scale(140),
        borderRadius: 10,
        paddingTop: 20,
      }}
    >
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontFamily: "medium", fontSize: scale(14) }}>
          {heading}
        </Text>
        <Line />
        <Text style={{ fontFamily: "light", marginTop: 4 }}>{subHeading}</Text>
      </View>

      <View style={{}}>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Image
            style={{ alignSelf: "flex-end" }}
            source={require("../../assets/images/dark-back.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Action;
