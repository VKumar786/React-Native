import React from "react";
import { Text, StyleSheet, Button, Linking, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text>Hello World</Text>
    <Button
      style={styles.buttonStyle}
      title="Go to Components Demo"
      onPress={() => {
        console.log("Go to Components Demo")
        navigation.navigate('Component')
      }}
    />
    <Text>1</Text> 
    <Button
      style={styles.buttonStyle}
      title="Go to List Demo"
      onPress={() => {
        console.log("Go to List Demo")
        navigation.navigate('List')
      }}
    />
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={() => {
        navigation.navigate('List')
      }}>
      <Text style={styles.text}>Go to List Demo</Text>
    </TouchableOpacity>
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
