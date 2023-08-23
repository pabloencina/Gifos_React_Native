import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import useApi from "../Hooks/useApi";

const Trending = ({ fontRoboto, fontMontserrat }) => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=Tj8JKaeKhEJjgbgXJ4V3SDC7647ujluy&limit=10`;
  const { loading, data } = useApi(url);
  console.log(data);
  if (data === null) {
    return null; // O puedes mostrar un mensaje de carga, por ejemplo
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerTrending}>
        <Text style={[styles.title, { fontFamily: fontRoboto }]}>
          Trending:
        </Text>
      </View>
      <View style={styles.textContainer}>
        {data.map((trend, index) => {
          return (
            <TouchableOpacity
              key={trend.id}
              style={styles.textWrapper}
              onPress={() => {}}
            >
              <Text style={[styles.text, { fontFamily: fontMontserrat }]}>
                {index !== data.length - 1
                  ? trend.title + ", "
                  : trend.title + ". "}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  containerTrending: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.color.primary,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.bold,
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 15,
  },
  textWrapper: {
    marginRight: 10,
  },
  text: {
    color: theme.color.blackColor,
    fontSize: theme.fontSizes.text,
    //marginTop: 20,
    //padding: 10,
  },
});
