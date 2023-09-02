import React, { useState } from "react";
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
import CardGifs from "../CardGifs/CardGifs";

const Trending = ({ fontRoboto, fontMontserrat, category, setCategory }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const { API_KEY, API_WORD_TRENDING } = useApiKeyUrl();
  const url = `${API_WORD_TRENDING}?api_key=${API_KEY}&limit=10`;
  const { loading, data } = useApi(url);
  console.log("TRENDING: " + data);
 
  function capitalizeWords(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  
  if (data === null || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  const filteredUsernames = data.filter((trend) => trend);

  const handleUsernameClick = (userId) => {
    setSelectedUserId(userId);
    {
      <CardGifs
        fontRoboto={fontRoboto}
        category={category}
        setCategory={setCategory}
      />;
    }
  };
  //const filteredData = data.filter((item) => item.id === selectedUserId);
  return (
    <View style={styles.container}>
      <View style={styles.containerTrending}>
        <Text style={[styles.title, { fontFamily: fontRoboto }]}>
          Trending:
        </Text>
      </View>
      <View style={styles.textContainer}>
        {filteredUsernames.map((trend, index) => {
          return (
            <TouchableOpacity
              key={trend.id}
              style={styles.textWrapper}
              onPress={() => handleUsernameClick(trend.id)}
            >
              <Text style={[styles.text, { fontFamily: fontMontserrat }]}>
                {index !== filteredUsernames.length - 1
                  ? capitalizeWords(trend) + ", "
                  : capitalizeWords(trend) + ". "}
               
              </Text>
            
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  containerTrending: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: theme.color.primary,
    fontSize: theme.fontSizes.title2,
    fontWeight: theme.fontWeights.bold,
  },
  textContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  textWrapper: {
    marginRight: 10,
  },
  text: {
    color: theme.color.blackColor,
    fontSize: theme.fontSizes.title,
  },
  containerGifs: {
    width: 210,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 25,
  },
});
