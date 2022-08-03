import {
  ImageBackground,
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  Image,
} from "react-native";
import { scale } from "react-native-size-matters";

const BackGround = ({ children }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(70,165,186,0.1)",
        paddingTop: StatusBar.currentHeight,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <Image
        source={require("../../assets/images/cloud.png")}
        style={{ width: width }}
      />
      <View style={{ flex: 1, top: scale(0), position: "absolute" }}>
        {children}
      </View>
    </View>
  );
};

export default BackGround;
