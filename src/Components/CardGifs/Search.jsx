import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import theme from "../../Styles/Theme/theme";

const Search = ({ setCategory, fontRoboto }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [searchResult, setSearchResult] = useState("");

  const handleSearchGif = () => {
    if (value === "") {
      setError(true);
      setValue(value);
      setSearchResult("");
      return;
    } else {
      setError(false);
      setSearchResult(value);
    }
    setValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={(newValue) => {
            setError(false);
            setCategory(value);
            setValue(newValue);
          }}
          placeholder="Busca GIFOS y más ..."
          onSubmitEditing={handleSearchGif}
        />
      </View>
      {error && (
        <Image
          source={require("../../../src/Assets/Images/Images-sin-resultados.png")}
        />
      )}
      {searchResult !== "" && (
        <Text style={[styles.textResult, { fontFamily: fontRoboto }]}>
          {searchResult}
        </Text>
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    borderColor: theme.color.quaternary,
    borderRadius: 25,
    borderWidth: 1,
    width: 300,
    height: 50,
    alignItems: "center",
    paddingLeft: 50,
  },
  input: {
    width: 300,
  },
  textResult: {
    color: theme.color.quaternary,
    fontSize: theme.fontSizes.title2,
    marginVertical: 10,
  },
});
