import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//components
import OnBoarding from "../screens/OnBoarding";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen
        name="onboarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
