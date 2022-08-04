import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserTypeSelection from '../screens/UserTypeSelection';
import Home from '../screens/Home';
import SignUp from '../screens/SignUp';
import LogIn from '../screens/LogIn';
import SignUpVerification from '../screens/SignUpVerification';
import AccountCreated from '../screens/AccountCreated';
import TrackPackage from '../screens/TrackPackage';

// Stack Navigator init
const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  /**
   * Show Signup/Login Screens when user is not authenticated
   * After successful authentication, show Home Screen
   */
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => setIsAuthenticated(true);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="home"
          >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="track-package" component={TrackPackage} />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="user-type-selection"
          >
            <Stack.Screen
              name="user-type-selection"
              component={UserTypeSelection}
            />
            <Stack.Screen name="sign-up" component={SignUp} />
            <Stack.Screen
              name="signup-verification"
              component={SignUpVerification}
            />
            <Stack.Screen name="account-created">
              {(props) => <AccountCreated loginUser={login} {...props} />}
            </Stack.Screen>
            <Stack.Screen name="login">
              {(props) => <LogIn loginUser={login} {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
