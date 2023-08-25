import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import theme from "../../Styles/Theme/theme";
import useApi from "../Hooks/useApi";
import BtnVerMas from "./BtnVerMas";
import Search from "./Search";

const CardGifs = ({ fontRoboto, category, setCategory }) => {
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const API_URL = "https://api.giphy.com/v1/gifs/search";
  const API_KEY = "Tj8JKaeKhEJjgbgXJ4V3SDC7647ujluy";
  const url = `${API_URL}?api_key=${API_KEY}&q=${category}&limit=${limit}&offset=${offset}`;
  const { loading, data } = useApi(url);

  const handleLoadMore = () => {
    setOffset(offset + limit);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {data && !data.length > 0 && (
          <Image
            style={styles.image}
            source={require("../../Assets/Images/ilustra_header.png")}
          />
        )}
      </View>
      <Search setCategory={setCategory} fontRoboto={fontRoboto} />

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.containerGifs}>
            <Image
              key={item.id}
              source={{ uri: item.images.downsized_medium.url }}
              style={styles.image}
            />
            {/* <Text style={[styles.text, { fontFamily: fontRoboto }]}>
              {item.title}
            </Text> */}
          </View>
        )}
      />

      {data && data.length > 0 && (
        <BtnVerMas handleLoadMore={handleLoadMore} fontRoboto={fontRoboto} />
      )}
    </View>
  );
};

export default CardGifs;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
    backgroundColor: theme.color.whiteColor,
  },

  containerGifs: {
    width: 210,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
  },
  imageContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 160,
    justifyContent: "center",
  },
  text: {
    color: theme.color.primary,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: theme.fontWeights.bold,
  },
});
