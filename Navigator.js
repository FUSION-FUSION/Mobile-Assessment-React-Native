import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SplashScreen from "./screens/SplashScreen";
import VerificationScreen from "./screens/VerificationScreen";
import LocationScreen from "./screens/LocationScreen";
import UserSelectionScreen from "./screens/UserSelectionScreen";
import CongratVerifiedScreen from "./screens/CongratVerifiedScreen";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

export const MyStack = () => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={screenOptions}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen
                name="VerificationScreen"
                component={VerificationScreen}
            />
            <Stack.Screen name="LocationScreen" component={LocationScreen} />
            <Stack.Screen
                name="UserSelectionScreen"
                component={UserSelectionScreen}
            />
            <Stack.Screen
                name="CongratVerifiedScreen"
                component={CongratVerifiedScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
);
