import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//screens
import ScreenHome from "./Screens/ScreenHome";
import ScreenGifs from "./Screens/ScreenGifs";
import ScreenFavorites from "./Screens/ScreenFavorites";

import { StyleSheet, View } from "react-native";
import theme from "../Styles/Theme/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DetailCardGifById from "./CardGifs/DetailCardGifById";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        tabBarInactiveTintColor: theme.color.secondary,
      }}
    >
      <Tab.Screen
        style={styles.container}
        name="Inicio"
        component={ScreenHome}
        options={{
          tabBarLabel: "",
          tabBarStyle: styles.container,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.containerIcons}>
              <MaterialCommunityIcons
                name="home-variant-outline"
                size={40}
                color={focused ? theme.color.quaternary : color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        style={styles.container}
        name="Buscar Gifos"
        component={ScreenGifs}
        options={{
          tabBarLabel: "",
          tabBarStyle: styles.container,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.containerIcons}>
              <MaterialCommunityIcons
                name="file-gif-box"
                size={40}
                color={focused ? theme.color.quaternary : color}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        style={styles.container}
        name="Favoritos"
        component={ScreenFavorites}
        options={{
          tabBarLabel: "",
          tabBarStyle: styles.container,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.containerIcons}>
              <MaterialCommunityIcons
                name="heart-plus-outline"
                size={45}
                color={focused ? theme.color.quaternary : color}
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        style={styles.container}
        name="Gif"
        component={DetailCardGifById}
        options={{
          tabBarLabel: "",
          tabBarStyle: styles.container,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.containerIcons}>
              <MaterialCommunityIcons
                name="heart-plus-outline"
                size={45}
                color={focused ? theme.color.quaternary : color}
              />
            </View>
          ),
        }}
      /> */}
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
  container: {
    backgroundColor: theme.color.whiteColor,
    height: 65,
    marginVertical: 20,
    padding: 20,
  },
  containerIcons: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.color.primary,
    height: 50,
  },
});
