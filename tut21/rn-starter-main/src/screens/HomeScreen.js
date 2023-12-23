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
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Enter You Name"
        value={name}
        style={{
          borderColor: "#eee",
          backgroundColor: "#fff",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderRadius: 5,
          fontSize: 17,
        }}
        onChangeText={(e) => setName(e)}
        autoCapitalize="none"
        autoCorrect={false}
      // onChange={(e) => {
      //   console.log(e.target.value)
      //   setName(e.target.value)
      // }}
      />
      {name.length > 0 && <Text
        style={{
          borderColor: "pink",
          backgroundColor: "#fff",
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderRadius: 5,
          fontSize: 17,
        }}
      >
        Your Good Name 😊 is {name}

        <View>
          {name.length < 5 && <Text style={{ color: "red" }}>Name must be longer than 5 character</Text>}
        </View>
      </Text>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
