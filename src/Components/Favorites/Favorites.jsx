import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import theme from "../../Styles/Theme/theme";

const Favorites = () => {
  return (
    <View style={styles.containerImage}>
      <Image
        style={styles.image}
        source={require("../../Assets/Images/icon-favoritos.png")}
      />
      <Text style={styles.text}>
        ¡Guarda tu primer GIFO en favoritos para que se muestre aquí!
      </Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  containerImage: {
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.whiteColor,
  },
  text: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.title,
    color: theme.color.secondary,
    marginVertical: 20,
    padding: 20,
  },
});
