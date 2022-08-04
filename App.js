import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";

import AccountCreatedSuccesfully from './src/screens/AccountCreatedSuccesfully';
import CreateAnAccountScreen from './src/screens/CreateAnAccountScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import Splash from './src/screens/Splash';
import TrackingScreen from './src/screens/TrackingScreen';
import UserScreen from './src/screens/UserScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import Card from './src/components/Card';

import Fonts from './src/constants/Fonts';

const Stack = createNativeStackNavigator();

export default function App() {

  
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TrackingScreen />

            {/* <Stack.Navigator initialRouteName='AccountSuccessful'>
              <Stack.Screen name="User" component={UserScreen} />
              <Stack.Screen name="CreateAccount" component={CreateAnAccountScreen} />
              <Stack.Screen name="AccountSuccesful" component={AccountCreatedSuccesfully} />
              <Stack.Screen name="Verification" component={VerificationScreen} />
              <Stack.Screen name="Dashboard" component={DashboardScreen} />
              <Stack.Screen name="Tracking" component={TrackingScreen} />
            </Stack.Navigator> */}
        </View>
    );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontFamily: Fonts.POPPINS_BLACK
  }
});
