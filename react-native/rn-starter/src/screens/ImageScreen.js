import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Mountains"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageScreen;
