import React from "react";
import { Text, StyleSheet, View } from "react-native";

const AboutScreen = () => {
    const name = "vishal"

    const greeting = <Text>How are you today</Text>
    return (
        <View>
            <Text style={styles.textStyle}>About Page</Text>
            <Text>Hi {name}</Text>
            {greeting} 
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: "pink",
        fontSize: 100,
    }
})

export default AboutScreen  