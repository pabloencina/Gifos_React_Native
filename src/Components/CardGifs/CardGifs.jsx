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

const CardGift = ({ fontRoboto, category, setCategory }) => {
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const API_URL = "https://api.giphy.com/v1/gifs/search";
  const API_KEY = "Tj8JKaeKhEJjgbgXJ4V3SDC7647ujluy";
  const url = `${API_URL}?api_key=${API_KEY}&q=${category}&limit=${limit}&offset=${offset}`;
  const { loading, data } = useApi(url);

  const handleLoadMore = () => {
    setOffset(offset + limit);
  };
  const screenHeight = Dimensions.get("window").height;
  return (
    <View style={[styles.container, { height: screenHeight * 100 }]}>
      <Search setCategory={setCategory} />
      <FlatList
        //style={{ backgroundColor: "red", flex: 1 }}
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
            <Text style={[styles.text, { fontFamily: fontRoboto }]}>
              {item.title}
            </Text>
          </View>
        )}
      />

      {data && data.length > 0 && (
        <BtnVerMas handleLoadMore={handleLoadMore} fontRoboto={fontRoboto} />
      )}
    </View>
  );
};

export default CardGift;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
  },
  containerGifs: {
    width: 210,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "red",
  },
  image: {
    width: 170,
    height: 170,
  },
  text: {
    color: theme.color.primary,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: theme.fontWeights.bold,
  },
});
