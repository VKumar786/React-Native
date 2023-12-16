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
      }}
    />
    <Button
      style={styles.buttonStyle}
      title="Go to List Demo"
      onPress={() => {
        console.log("Go to List Demo")
      }}
       />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonStyle: {
    margin: 10
  }
});

export default HomeScreen;
