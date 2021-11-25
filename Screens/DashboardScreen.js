import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "../Navigation/DrawerNavigation";
import TabNavigation from "../Navigation/TabNavigation";

export default function DashboardScreen() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
