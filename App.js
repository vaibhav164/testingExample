import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "./src/screens/SignIn";
import Example from "./src/screens/Example";
import OnBoardScreen from './src/screens/OnBoardScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Sign In" }}
      />
      <Stack.Screen
        name="App"
        component={Example}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="OnBoardScreen"
        component={OnBoardScreen}
        options={{ title: "On Board Screen" }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{ title: "Details" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);