import React, { useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

import theme from "../../Styles/Theme/theme";
import useApi from "../Hooks/useApi";
import BtnVerMas from "./BtnVerMas";
import Search from "./Search";
import useApiKeyUrl from "../Hooks/useApiKeyUrl";
import DetailCardGifById from "./DetailCardGifById";

const CardGifs = ({
  fontRoboto,
  category,
  setCategory,
  setSelectedGif,
  selectedGif,
}) => {
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const { API_URL_SEARCH, API_KEY } = useApiKeyUrl();
  const url = `${API_URL_SEARCH}?api_key=${API_KEY}&q=${category}&limit=${limit}&offset=${offset}`;
  const { loading, data } = useApi(url);
  const [showDetail, setShowDetail] = useState(false);

  const handleLoadMore = () => {
    setOffset(offset + limit);
  };

  const handleCardById = (itemId) => {
    const selected = data.find((item) => item.id === itemId);
    setSelectedGif(selected);
    setShowDetail(true);
  };
  const handleBackToGifs = () => {
    setShowDetail(false);
  };
  if (showDetail) {
    return (
      <DetailCardGifById
        selectedGif={selectedGif}
        handleBackToGifs={handleBackToGifs}
      />
    );
  }
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
          <TouchableOpacity
            style={styles.containerGifs}
            onPress={() => handleCardById(item.id)}
          >
            <Image
              key={item.id}
              source={{ uri: item.images.downsized_medium.url }}
              style={styles.image}
            />
          </TouchableOpacity>
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
