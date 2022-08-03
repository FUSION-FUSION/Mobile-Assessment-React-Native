import {
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import BackGround from "../../components/BackGround";
import TopBar from "../../Sections/TopBar";

const HomeScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 25,
      }}
    >
      <TopBar />
    </ScrollView>
  );
};

export default HomeScreen;
