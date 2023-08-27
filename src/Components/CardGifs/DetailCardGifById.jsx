import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../Styles/Theme/theme";
import { TouchableOpacity } from "react-native";

const DetailCardGifById = ({ selectedGif }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCloseIcon}>
        <TouchableOpacity>
          <Ionicons name="close" size={30} color={theme.color.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerGifs}>
        <Image
          key={selectedGif.id}
          source={{ uri: selectedGif.images.downsized_medium.url }}
          style={styles.image}
        />
      </View>

      <View style={styles.containerDescription}>
        <View style={styles.containerText}>
          <Text style={styles.text}>{selectedGif.title}</Text>
        </View>

        <View style={styles.containerIcons}>
          <TouchableOpacity>
            <AntDesign name="download" size={30} color={theme.color.primary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="heart" size={30} color={theme.color.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailCardGifById;

const styles = StyleSheet.create({
  container: {
    height: 600,
    padding: 25,
    justifyContent: "center",
  },
  containerCloseIcon: {
    height: 70,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 15,
  },
  containerGifs: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerDescription: {
    flexDirection: "row",
    height: 100,
    alignItems: "center",
  },
  containerIcons: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
    padding: 15,
  },
  containerText: {
    width: "70%",
    height: 100,
    justifyContent: "center",
  },
  imageContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    justifyContent: "center",
  },
  text: {
    color: theme.color.blackColor,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: theme.fontWeights.bold,
  },
});
