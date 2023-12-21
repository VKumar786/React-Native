import React from 'react'
import { Text, Image, View } from 'react-native'

const ImageDetails = ({ title, imgUrl, imgScore }) => {
    return (
        <View style={{ display: "flex", gap: 2, marginVertical: 3 }}>
            <Text style={{ display: "inline-flex" }}>{title}</Text>
            <Image source={{ uri: imgUrl }} style={{ width: 30, height: 30 }} />
            <Text>Image Score - {imgScore}</Text>
        </View>
    )
}

export default ImageDetails