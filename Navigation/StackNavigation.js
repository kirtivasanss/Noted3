import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./DrawerNavigation";
import ListScreen from "../Screens/ListScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Lists Screen" component={ListScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
