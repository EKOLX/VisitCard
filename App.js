import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./app/screens/MainScreen";
import DetailScreen from "./app/screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Visit Cards" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{ title: "Card Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
