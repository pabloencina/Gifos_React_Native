import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//screens
import ScreenHome from "./Screens/ScreenHome";
import ScreenGifs from "./Screens/ScreenGifs";
import ScreenFavorites from "./Screens/ScreenFavorites";

import { StyleSheet } from "react-native";
import theme from "../Styles/Theme/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{ tabBarInactiveTintColor: theme.color.whiteColor }}
    >
      <Tab.Screen
        name="Inicio"
        component={ScreenHome}
        options={{
          tabBarLabel: "Inicio",
          tabBarStyle: styles.containerText,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Buscar Gifos"
        component={ScreenGifs}
        options={{
          tabBarLabel: "Buscar Gifos",
          tabBarStyle: styles.containerText,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-gif-box"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={ScreenFavorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarStyle: styles.containerText,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-plus-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
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

const styles = StyleSheet.create({
  containerText: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.title,
    color: "red",
    backgroundColor: theme.color.primary,
    height: 50,
    marginVertical: 20,
    padding: 20,
  },
  containerTop: {
    backgroundColor: theme.color.primary,
  },
});
