import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.textStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ImageDetail;
