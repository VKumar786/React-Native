import React from "react";
import { Text, StyleSheet, Button, Linking, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text>Hello World</Text>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellat assumenda, maiores quod aperiam autem ipsam veniam quam earum veritatis sit modi magni ea inventore asperiores obcaecati tenetur qui explicabo?</Text>
    <TouchableOpacity onPress={() => { navigation.navigate("About") }}>
      <Text>About Page</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { navigation.navigate("Exercise") }}>
      <Text>Exercise Page</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
