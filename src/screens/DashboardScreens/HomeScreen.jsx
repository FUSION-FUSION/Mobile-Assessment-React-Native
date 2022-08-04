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
import TrackSection from "../../Sections/HomePage/TrackSection";
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
      <TrackSection />
    </ScrollView>
  );
};

export default HomeScreen;
