import React from "react";
import { Text, StyleSheet, View } from "react-native";

const AboutScreen = () => {
    let arr = [
        {name: "vishal"},
        {name: "papa ji"},
        {name: "vivek"},
    ]
    return (
        <View>
            {arr.map((item) => {
                return <Text>{item.name}</Text>
            })}
        </View> 
    )
}

const styles = StyleSheet.create({
    textStyle: {}
})

export default AboutScreen  