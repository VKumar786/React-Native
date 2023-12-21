import React from 'react'
import { FlatList, Text, StyleSheet, Button, Linking, View, Image } from "react-native";
import ImageDetails from '../component/ImageDetails'

const ImageScreen = ({ DATA }) => {
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.title}
                data={DATA}
                renderItem={({ item }) =>
                    <ImageDetails {...item} />
                } />
            <Image source={require("../../assets/mountain.jpg")} style={{ width: 30, height: 30 }} />
        </View>
    )
}

export default ImageScreen