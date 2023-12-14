import React from "react";
import { Text, StyleSheet } from "react-native";

const AboutScreen = () => {
    return (
        <Text style={styles.textStyle}>About Page</Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: "red"
    }
})

export default AboutScreen