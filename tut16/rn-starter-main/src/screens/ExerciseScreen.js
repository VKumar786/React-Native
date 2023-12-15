import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ExerciseScreen = () => {
    const name = "vishal"
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text>My Name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50
    }
})

export default ExerciseScreen  