import React, { useState } from "react";
import { FlatList, Text, StyleSheet, Button, Linking, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [red, setRed] = useState(0)
  const [blue, setBlue] = useState(0)
  const [green, setGreen] = useState(0)

  return <View>
    <Text>Red</Text>
    <TouchableOpacity onPressIn={() => setInterval(() => setRed(prev => Math.abs((prev + 10) % 256)), 100)}>
      <Text>+</Text>
    </TouchableOpacity>
    <TouchableOpacity onPressIn={() => setInterval(() => setRed(prev => Math.abs((prev - 10) % 256)), 100)}>
      <Text>-</Text>
    </TouchableOpacity>
    <Text>Blue</Text>
    <Button title="+" onPress={() => setBlue(prev => Math.abs((prev + 10) % 256))} />
    <Button title="-" onPress={() => setBlue(prev => Math.abs((prev - 10) % 256))} />
    <Text>Green</Text>
    <Button title="+" onPress={() => setGreen(prev => Math.abs((prev + 10) % 256))} />
    <Button title="-" onPress={() => setGreen(prev => Math.abs((prev - 10) % 256))} />

    <Text>rgb({red}, {blue}, {green})</Text>
    <View style={{
      width: 80,
      height: 80,
      backgroundColor: `rgb(${red}, ${blue}, ${green})`
    }} />
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
