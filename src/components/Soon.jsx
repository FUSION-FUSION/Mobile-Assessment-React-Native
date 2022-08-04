import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Line from "./line";

const Soon = ({ heading, subHeading, image, dashed }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: scale(140),
        borderRadius: 10,
        paddingTop: 20,
        opacity: 0.5,
      }}
    >
      <View
        style={{
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontFamily: "medium", fontSize: scale(16) }}>
          {heading}
        </Text>
        <Line />
        <Text style={{ fontFamily: "light" }}>{subHeading}</Text>
      </View>

      <View style={{}}>
        <Image source={image} />

        <Image
          style={{ alignSelf: "flex-end", bottom: 50 }}
          source={require("../../assets/images/coming.png")}
        />
      </View>
    </View>
  );
};

export default Soon;
