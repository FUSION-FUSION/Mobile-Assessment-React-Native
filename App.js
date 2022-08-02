import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import CreateAnAccountScreen from './src/screens/CreateAnAccountScreen';
import HomeScreen from './src/screens/HomeScreen';
import Splash from './src/screens/Splash';


export default function App() {
  return (
    <View style={styles.container}>
      <CreateAnAccountScreen />
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
