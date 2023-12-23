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
      <Text style={{ ...styles.para, flex: 1 }}>Hi There 👋</Text>
      <Text
        style={{
          ...styles.para,
          borderColor: "#9DFF00",
          flex: 1,
          alignSelf: "flex-end",
          // position: "absolute",
          // top: 0,
          // left: 0,
          // right: 0,
          // bottom: 0,
          ...StyleSheet.absoluteFillObject
        }}
      >
        Hi There 👋
      </Text>
      <Text style={{ ...styles.para, borderColor: "red", flex: 1 }}>
        Hi There 👋
      </Text>
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
    height: "40%",
  },
  para: {
    borderColor: "pink",
    borderWidth: 3,
    padding: 5,
    textAlign: "center",
    fontSize: 14,
    // width: 50,
    // height: 50
  },
});

export default HomeScreen;
