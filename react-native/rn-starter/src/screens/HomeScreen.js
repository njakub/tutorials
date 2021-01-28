import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to Square"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
