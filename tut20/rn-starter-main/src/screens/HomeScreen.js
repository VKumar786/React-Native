import React from "react";
import { FlatList, Text, StyleSheet, Button, Linking, View } from "react-native";
import ImageScreen from "./ImageScreen";

const HomeScreen = ({ navigation }) => {
  const DATA = [
    { title: "forest", imgUrl: "https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg" , imgScore: 8},
    { title: "apple", imgUrl: "https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg" , imgScore: 8.1},
    { title: "tom", imgUrl: "https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg" , imgScore: 1.8}]
  return <View>
    <ImageScreen DATA={DATA} />
    <Button title="List" onPress={() => navigation.navigate("List")} />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "white"
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: "#000",
    color: "#fff",
    padding: 5,
  }
});

export default HomeScreen;
