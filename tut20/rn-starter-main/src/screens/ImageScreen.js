import React from 'react'
import { FlatList, Text, StyleSheet, Button, Linking, View } from "react-native";
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
        </View>
    )
}

export default ImageScreen