import React, {useState} from "react";
import { FlatList, Text, StyleSheet, Button, Linking, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [cnt, setCnt] = useState(0);
  return <View>
    <Button title="Increase" onPress={() => setCnt(prev => prev + 1)}/>
    <Text>Current Counter {cnt}</Text>
    <Button title="Decrease" onPress={() => setCnt(prev => prev - 1)}/>
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
