import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CongratScreen from "../screens/AuthScreens/CongratScreen";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import OtpScreen from "../screens/AuthScreens/OtpScreen";
import RegisterScreen from "../screens/AuthScreens/RegisterScreen";
import SplashScreen from "../screens/AuthScreens/SplashScreen";
import HomeScreen from "../screens/DashboardScreens/HomeScreen";
import TrackScreen from "../screens/DashboardScreens/TrackScreen";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={SplashScreen} name="splash" />
        <Stack.Screen component={RegisterScreen} name="register" />
        <Stack.Screen component={OtpScreen} name="otp" />
        <Stack.Screen component={CongratScreen} name="congrats" />
        <Stack.Screen component={LoginScreen} name="login" />
        <Stack.Screen component={HomeScreen} name="home" />
        <Stack.Screen component={TrackScreen} name="track" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
