import React from 'react'
import { FlatList, Text, View } from 'react-native'

const ExerciseScreen = () => {
    let Data = [
        { name: "vishal", age: 21 },
        { name: "vivek", age: 18 },
        { name: "phadi", age: 23 },
        { name: "suraj", age: 21 },
    ]
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.name}
                data={Data}
                renderItem={({ item }) =>
                    <Text
                        style={{ margin: 100 }}>
                        {item.name} - Age {item.age}
                    </Text>
                } />
        </View>
    )
}

export default ExerciseScreen