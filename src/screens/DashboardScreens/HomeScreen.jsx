import { ScrollView, StatusBar, View } from "react-native";
import BackGround from "../../components/BackGround";
import PackageSection from "../../Sections/HomePage/PackageSection";
import TopBar from "../../Sections/HomePage/TopBar";
import TrackSection from "../../Sections/HomePage/TrackSection";
import WalletSection from "../../Sections/HomePage/WalletSection";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 25,
      }}
    >
      <TopBar />
      <WalletSection />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TrackSection />
        <PackageSection />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
