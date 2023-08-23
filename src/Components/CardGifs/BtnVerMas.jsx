// import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../../Styles/Theme/theme";

const BtnVerMas = ({ fontRoboto, handleLoadMore }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        //activeOpacity={0.6}
        style={[styles.button, { fontFamily: fontRoboto }]}
        onPress={() => handleLoadMore()}
      >
        <Text style={styles.text}> VER MÁS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 110,
    height: 40,

    borderWidth: 1,
    borderColor: theme.color.primary,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.color.primary,
  },
});

export default BtnVerMas;
