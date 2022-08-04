import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserType from './Components/UserType';
import Welcome from './Components/Welcome';
import Verification from './Components/Verification';
import Congratulations from './Components/Congratulations';
import SignIn from './Components/SignIn';
import DashBoard from './Components/DashBoard';
export default function App() {
  
  return (
    <View style={styles.container}>
      {/* <UserType/> */}
      {/* <Welcome/> */}
      {/* <Verification/> */}
      {/* <Congratulations/> */}
      {/* <SignIn/> */}
      <DashBoard/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: '3rem',
    paddingHorizontal: '1rem',
    fontFamily: 'Nunito'
  },
});
