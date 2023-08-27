import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import theme from "../../Styles/Theme/theme";
import useApi from "../Hooks/useApi";
import useApiKeyUrl from "../Hooks/useApiKeyUrl";

const TrendingGifos = ({ fontRoboto }) => {
  const { API_URL_TRENDING, API_KEY } = useApiKeyUrl();

  const url = `${API_URL_TRENDING}?api_key=${API_KEY}&limit=10`;
  const { loading, data } = useApi(url);
  return (
    <View>
      <View style={styles.containerText}>
        <Text style={[styles.title, { fontFamily: fontRoboto }]}>
          Trending GIFOS
        </Text>
        <Text style={[styles.text, { fontFamily: fontRoboto }]}>
          Mira los últimos GIFOS de nuestra comunidad.
        </Text>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          pagingEnabled={true}
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.container}
                key={item.id}
                onPress={() => {}}
              >
                <Image
                  source={{ uri: item.images.downsized_medium.url }}
                  style={styles.image}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default TrendingGifos;

const styles = StyleSheet.create({
  containerText: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    backgroundColor: theme.color.greyColor,
  },
  container: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 5,
    backgroundColor: theme.color.greyColor,
    borderColor: theme.color.blackColor,
  },
  title: {
    color: theme.color.blackColor,
    fontSize: theme.fontSizes.title,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  text: {
    color: theme.color.blackColor,
    fontSize: theme.fontSizes.text,
    marginTop: 20,
    padding: 10,
  },
  image: {
    width: 180,
    height: 180,
  },
});
