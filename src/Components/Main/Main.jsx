import React, { useState } from "react";
import { View } from "react-native";
import AppBar from "../AppBar/AppBar";
import Home from "../Home-Inicio/Home";
import Footer from "../Footer/Footer";
import CardGifs from "../CardGifs/CardGifs";
import useShowDetail from "../Hooks/useShowDetail";

const Main = ({ fontRoboto, fontMontserrat }) => {
  const [category, setCategory] = useState("");
  const { selectedGif, setSelectedGif } = useShowDetail();
  return (
    <View>
      <AppBar fontRoboto={fontRoboto} />

      <Home
        fontRoboto={fontRoboto}
        fontMontserrat={fontMontserrat}
        setCategory={setCategory}
        setSelectedGif={setSelectedGif}
      />

      <CardGifs
        fontRoboto={fontRoboto}
        category={category}
        setCategory={setCategory}
        selectedGif={selectedGif}
        setSelectedGif={setSelectedGif}
      />

      <Footer fontMontserrat={fontMontserrat} />
    </View>
  );
};

export default Main;
