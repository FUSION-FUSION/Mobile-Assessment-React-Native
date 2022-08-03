import {
  ImageBackground,
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  Image,
  ScrollView,
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
      }}
      showsVerticalScrollIndicator={false}
    >
      <Image
        source={require("../../assets/images/cloud.png")}
        style={{ width: width, position: "relative", top: 0, left: 0 }}
      />
      <View
        style={{
          bottom: scale(200),
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default BackGround;
