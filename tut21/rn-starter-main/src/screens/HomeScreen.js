import React, { useState } from "react";
import { FlatList, Text, StyleSheet, Button, Linking, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [colorArr, setColorArr] = useState([])
  const generateRandomHex = () => {
    const characters = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += characters[Math.floor(Math.random() * 16)];
    }
    return hex;
  }
  return <View>
    <Button title="Add Color" onPress={() => {
      setColorArr(prev => [...prev, generateRandomHex()])
    }} />
    {/* {colorArr.map((item, idx) => {
      return <Text key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", width: 80, height: 70, backgroundColor: item }}>{item}</Text>
    })} */}
    <FlatList
      horizontal
      showsVerticalScrollIndicator={true}
      keyExtractor={(item) => item}
      data={colorArr}
      renderItem={({ item }) => {
        return <Text style={{ display: "flex", width: 80, height: 70, backgroundColor: item }}>{item}</Text>
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
