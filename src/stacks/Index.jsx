import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CongratScreen from "../screens/AuthScreens/CongratScreen";
import OtpScreen from "../screens/AuthScreens/OtpScreen";
import RegisterScreen from "../screens/AuthScreens/RegisterScreen";
import SplashScreen from "../screens/AuthScreens/SplashScreen";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={SplashScreen} name="splash" />
        <Stack.Screen component={RegisterScreen} name="register" />
        <Stack.Screen component={OtpScreen} name="otp" />
        <Stack.Screen component={CongratScreen} name="congrats" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
