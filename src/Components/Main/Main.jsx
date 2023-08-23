import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import AppBar from "../AppBar/AppBar";
import Home from "../Home-Inicio/Home";
import Footer from "../Footer/Footer";
import CardGift from "../CardGifs/CardGifs";
//import TrendingGifos from "../Home-Inicio/TrendingGifos";

const Main = ({ fontRoboto, fontMontserrat }) => {
  const [category, setCategory] = useState("");
  return (
    <View>
      <AppBar fontRoboto={fontRoboto} />

      <Home
        fontRoboto={fontRoboto}
        fontMontserrat={fontMontserrat}
        setCategory={setCategory}
        //category={category}
      />

      <CardGift fontRoboto={fontRoboto} category={category} />
      <Footer fontMontserrat={fontMontserrat} />
    </View>
  );
};

export default Main;
{
  /* <Home
        fontRoboto={fontRoboto}
        fontMontserrat={fontMontserrat}
        setCategory={setCategory}
        category={category}
      />
      <CardGift fontRoboto={fontRoboto} category={category} />
      <TrendingGifos fontRoboto={fontRoboto} fontMontserrat={fontMontserrat} />
      <Footer fontMontserrat={fontMontserrat} /> */
}
