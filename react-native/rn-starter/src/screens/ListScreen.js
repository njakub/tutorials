import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ComponentsScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 33 },
    { name: "Friend #3", age: 22 },
    { name: "Friend #4", age: 66 },
    { name: "Friend #5", age: 85 },
    { name: "Friend #6", age: 32 },
    { name: "Friend #7", age: 41 },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ComponentsScreen;
