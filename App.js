import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserType from './Components/UserType';
import Welcome from './Components/Welcome';
import Verification from './Components/Verification';
import Congratulations from './Components/Congratulations';
import SignIn from './Components/SignIn';
import DashBoard from './Components/DashBoard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ecommerce from './Components/Ecommerce';
import Header from './Shared/Header';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <View style={styles.container}>
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserType'>
        <Stack.Screen name="user-type" component={UserType} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="e-commerce" component={Ecommerce} />
        <Stack.Screen name="verification" component={Verification} />
        <Stack.Screen name="congratulations" component={Congratulations} />
        <Stack.Screen name="dashboard" component={DashBoard} 
        options={{
          headerTitle: ()=> <Header/>,
          headerStyle:{
            backgroundColor:'#dfdfdf',
          }
        }}
        />
        <Stack.Screen name="sign-in" component={SignIn} />

      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}


  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Nunito',
  },
});
