import React from "react";
import { Text, StyleSheet } from "react-native";

const AboutScreen = () => {
    return (
        <Text style={styles.textStyle}>About Page</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: "pink",
        fontSize: 100,
    }
})

export default AboutScreen