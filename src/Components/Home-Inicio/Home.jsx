import React from "react";
import { ScrollView, View } from "react-native";
import Trending from "../Trending/Trending";
import TrendingGifos from "../Trending/TrendingGifos";
import Introduction from "./Introduction";

const Home = ({ fontRoboto, fontMontserrat, setSelectedGif }) => {
  return (
    <View>
      <ScrollView>
        <Introduction fontRoboto={fontRoboto} fontMontserrat={fontMontserrat} />

        <Trending fontRoboto={fontRoboto} fontMontserrat={fontMontserrat} />
        <TrendingGifos
          setSelectedGif={setSelectedGif}
          fontRoboto={fontRoboto}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
