import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import Trending from "../Trending/Trending";
import TrendingGifos from "../Trending/TrendingGifos";
//import CardGift from "../CardsGift/CardGift";

const Home = ({ fontRoboto, fontMontserrat, setCategory }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
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

        <Trending fontRoboto={fontRoboto} fontMontserrat={fontMontserrat} />
        <TrendingGifos fontRoboto={fontRoboto} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    //flex: 0,
  },
  text: {
    color: theme.color.primary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.title2,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    alignItems: "center",
  },
  colorGifos: {
    color: theme.color.secondary,
    fontWeight: theme.fontWeights.bold,
  },
});
