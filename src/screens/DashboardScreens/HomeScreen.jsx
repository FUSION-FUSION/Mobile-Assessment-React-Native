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
import TopBar from "../../Sections/HomePage/TopBar";
import WalletSection from "../../Sections/HomePage/WalletSection";

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
      <WalletSection />
    </ScrollView>
  );
};

export default HomeScreen;
