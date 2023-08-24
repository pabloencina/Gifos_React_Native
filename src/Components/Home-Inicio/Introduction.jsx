import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";

const Introduction = ({ fontRoboto, fontMontserrat }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontFamily: fontMontserrat }]}>
        Inspirate, busca, guarda,
      </Text>
      <Text style={[styles.text, { fontFamily: fontMontserrat }]}>
        y crea los mejores{" "}
        <Text style={[styles.colorGifos, { fontFamily: fontMontserrat }]}>
          GIFOS
        </Text>
      </Text>
      <Image
        style={styles.image}
        source={require("../../Assets/Images/Image-principal.png")}
      />
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    flex: 1,
    backgroundColor: theme.color.whiteColor,
  },
  text: {
    color: theme.color.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.title2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  colorGifos: {
    color: theme.color.secondary,
    fontWeight: theme.fontWeights.bold,
  },
});
