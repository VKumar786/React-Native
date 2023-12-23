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
      <Text style={{ ...styles.para, borderColor: "yellow" }}>Hi There 👋</Text>
      <Text style={{ ...styles.para, borderColor: "red" }}>Hi There 👋</Text>
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "min-content",
    height: "100%",
    flexDirection: "row"
  }, 
  para: {
    borderColor: "pink",
    borderWidth: 3,
    padding: 5,
    textAlign: "center",
    fontSize: 14,
    // width: 50,
    // height: 50
  }
});

export default HomeScreen;
