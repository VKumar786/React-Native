import React, { useState, useReducer } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  Button,
  Linking,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.para}>Hi There 👋</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#eee",
    padding: 5,
    margin: 7,
  },
  para: {
    borderColor: "pink",
    borderWidth: 3,
    padding: 5,
    textAlign: "center",
    fontSize: 20
  }
});

export default HomeScreen;
