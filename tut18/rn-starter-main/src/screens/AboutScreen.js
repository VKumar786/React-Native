import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const AboutScreen = () => {
	let arr = [
		{ name: "vishal" },
		{ name: "suraj" },
		{ name: "vivek" },
	]
	return (
		<View>
			<FlatList data={arr} renderItem={(element) => {
				// element { "item" : { name : "vishal" }, "index": "0", "separators": {}}
				return <Text>{JSON.stringify(element)}</Text>
			}} />
			<FlatList data={arr} renderItem={({ item, index }) => {
				// element { "item" : { name : "vishal" }, "index": "0", "separators": {}}
				return <Text key={index}>{item.name}</Text>
			}} />
		</View>
	)
}

const styles = StyleSheet.create({
	textStyle: {}
})

export default AboutScreen  