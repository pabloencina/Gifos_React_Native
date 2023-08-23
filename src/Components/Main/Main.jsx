import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import AppBar from "../AppBar/AppBar";
import Home from "../Home-Inicio/Home";
import Footer from "../Footer/Footer";
import CardGifs from "../CardGifs/CardGifs";
import TrendingGifos from "../Trending/TrendingGifos";
import Trending from "../Trending/Trending";
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
      {/* <Trending fontRoboto={fontRoboto} fontMontserrat={fontMontserrat} /> */}
      <CardGifs fontRoboto={fontRoboto} category={category} />
      {/* <TrendingGifos fontRoboto={fontRoboto} fontMontserrat={fontMontserrat} /> */}
      <Footer fontMontserrat={fontMontserrat} />
    </View>
  );
};

export default Main;
