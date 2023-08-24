import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import ScreenHome from "./Screens/ScreenHome";
import ScreenGifs from "./Screens/ScreenGifs";
import ScreenFavorites from "./Screens/ScreenFavorites";

//screens

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ScreenHome} />
      <Tab.Screen name="Gifos" component={ScreenGifs} />
      <Tab.Screen name="Favoritos" component={ScreenFavorites} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
