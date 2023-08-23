import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../Styles/Theme/theme";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Footer = ({ fontMontserrat }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontFamily: fontMontserrat }]}>
        &copy; GIFOS 2023 All Rights Reserved.
      </Text>
      <Text style={[styles.text2, { fontFamily: fontMontserrat }]}>
        Compartir en:
      </Text>
      <Text style={styles.textIcons}>
        {" "}
        <Text style={{ flex: 1 }}>
          {" "}
          <FontAwesomeIcon
            style={[styles.icon, { marginLeft: 10, width: 50 }]}
            name="facebook"
            size={20}
          />
        </Text>
        <Text>
          <FontAwesomeIcon style={styles.icon} name="instagram" size={20} />
        </Text>
        <Text>
          <FontAwesomeIcon style={styles.icon} name="twitter" size={20} />
        </Text>
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: theme.fontSizes.text,
    justifyContent: "center",
    alignItems: "center",
    width: 180,
  },
  icon: {
    color: theme.color.quaternary,
    //backgroundColor: "yellow",
    width: 300,
  },
  text2: {
    fontSize: theme.fontSizes.text,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  textIcons: {
    //backgroundColor: "red",
    width: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
});
