import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";

const AppBar = ({ fontRoboto }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../Assets/Images/logo.png")}
      />

      <Text style={[styles.text, { fontFamily: fontRoboto }]}>
        Modo Nocturno
      </Text>
      <Text style={[styles.text, { fontFamily: fontRoboto }]}>Favoritos</Text>
    </View>
  );
};

export default AppBar;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.whiteColor,
    width: width,
    height: 80,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  text: {
    color: theme.color.primary,
    fontSize: theme.fontSizes.text,
    fontWeight: theme.fontWeights.bold,
  },
  image: {
    width: 50,
    height: 50,
  },
});
