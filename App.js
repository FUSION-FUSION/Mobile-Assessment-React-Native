import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AccountCreatedSuccesfully from './src/screens/AccountCreatedSuccesfully';
import CreateAnAccountScreen from './src/screens/CreateAnAccountScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import Splash from './src/screens/Splash';
import TrackingScreen from './src/screens/TrackingScreen';
import UserScreen from './src/screens/UserScreen';
import VerificationScreen from './src/screens/VerificationScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" /> 
      <DashboardScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
