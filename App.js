import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import DashboardScreen from "./Screens/DashboardScreen";
import ListScreen from "./Screens/ListScreen";
import CreateListScreen from "./Screens/CreateList";

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  DashboardScreen: DashboardScreen,
  CreateListScreen: CreateListScreen,
  ListScreen: ListScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}

