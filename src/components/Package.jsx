import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

const Package = ({ heading, subHeading, image, dashed }) => {
  return (
    <ImageBackground
      imageStyle={{
        resizeMode: "contain",
        top: scale(115),
        position: "absolute",
      }}
      source={require("../../assets/images/road.png")}
      style={{
        backgroundColor: "#fff",
        width: scale(140),
        borderRadius: 10,
        paddingTop: 20,
      }}
    >
      {dashed ? (
        <Image
          source={require("../../assets/images/productline.png")}
          style={{ width: "100%" }}
        />
      ) : (
        <View style={{ height: 20 }}></View>
      )}

      <View
        style={{
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontFamily: "medium", fontSize: scale(16) }}>
          {heading}
        </Text>
        <View
          style={{
            backgroundColor: "#46A5BA",
            width: 20,
            paddingVertical: 1.5,
            marginVertical: 3,
            marginBottom: 5,
          }}
        />
        <Text style={{ fontFamily: "light" }}>{subHeading}</Text>
      </View>

      <View
        style={{
          marginBottom: verticalScale(15),
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Image source={image} />
        <TouchableOpacity>
          <Image
            style={{ width: 40 }}
            source={require("../../assets/images/arrow.png")}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Package;
