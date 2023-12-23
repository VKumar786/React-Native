import React, { useState, useReducer } from "react";
import { FlatList, Text, StyleSheet, Button, Linking, View, TouchableOpacity } from "react-native";

const ColorBtn = ({ title, onInc, onDec }) => {
  return <View>
    <Text>{title}</Text>
    <Button title="+" onPress={onInc} />
    <Button title="-" onPress={onDec} />
  </View>
}

const reducer = (state, action) => {
  // state = { red: number, blue: number, green: number }
  // action = { colorToChange: 'red' | 'blue' | 'green', amount: 10 | -10}
  console.warn(state, action);
  switch (action.colorToChange) {
    case 'red':
      //! state.red = state.red + amount > invalid
      return {
        ...state,
        red: state.red + action.amount
      }
    case 'blue':
      return {
        ...state,
        blue: state.blue + action.amount
      }
    case 'green':
      return {
        ...state,
        green: state.green + action.amount
      }
    default:
      return state
  }
}

const HomeScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 })

  return <View>
    <ColorBtn title={"Red"} onInc={() => dispatch({ colorToChange: "red", amount: 15 })} onDec={() => dispatch({ colorToChange: "red", amount: -1 * 15 })} />
    <ColorBtn title={"Blue"} onInc={() => dispatch({ colorToChange: "blue", amount: 15 })} onDec={() => dispatch({ colorToChange: "blue", amount: -1 * 15 })} />
    <ColorBtn title={"Green"} onInc={() => dispatch({ colorToChange: "green", amount: 15 })} onDec={() => dispatch({ colorToChange: "green", amount: -1 * 15 })} />

    <Text>rgb({state.red}, {state.blue}, {state.green})</Text>

    <View style={{
      width: 80,
      height: 80,
      backgroundColor: `rgb(${state.red}, ${state.blue}, ${state.green})`
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
