import React from "react";
import { ScrollView, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import Trending from "../Trending/Trending";
import TrendingGifos from "../Trending/TrendingGifos";
import Introduction from "./Introduction";

const Home = ({ fontRoboto, fontMontserrat, setCategory }) => {
  return (
    <View>
      <ScrollView>
        <Introduction fontRoboto={fontRoboto} fontMontserrat={fontMontserrat} />

        <Trending fontRoboto={fontRoboto} fontMontserrat={fontMontserrat} />
        <TrendingGifos fontRoboto={fontRoboto} />
      </ScrollView>
    </View>
  );
};

export default Home;
