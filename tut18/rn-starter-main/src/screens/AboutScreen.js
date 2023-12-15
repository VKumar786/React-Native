import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const AboutScreen = () => {
	const [data, setData] = useState([
		{ name: "vishal" },
		{ name: "suraj" },
		{ name: "vivek" },
	]);

	return (
		<View>
			<FlatList data={data} renderItem={(element) => {
				// element { "item" : { name : "vishal" }, "index": "0", "separators": {}}
				return <Text key={element.item.name}>{JSON.stringify(element)}</Text>
			}} />
			<FlatList data={data} renderItem={({ item, index }) => {
				// element { "item" : { name : "vishal" }, "index": "0", "separators": {}}
				return <Text key={index} onPress={() => {
					setData(prev => {
						return prev.slice(0, -1)
					})
				}}>{item.name}</Text>
			}} />
		</View>
	)
}

const styles = StyleSheet.create({
	textStyle: {}
})

export default AboutScreen  