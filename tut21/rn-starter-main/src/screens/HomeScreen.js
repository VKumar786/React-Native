import React, { useState, useReducer } from "react";
import { FlatList, Text, StyleSheet, Button, Linking, View, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case 'COUNTER':
      return { ...state, count: state.count + action.payload }
    default:
      return state
  }
}

const HomeScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const { count } = state
  return <View>
    <Button title="Increase" onPress={() => dispatch({ type: 'COUNTER', payload: 1 })} />
    <Button title="Decrease" onPress={() => dispatch({ type: 'COUNTER', payload: -1 })} />
    <Text>Current Count: {count}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default HomeScreen;
