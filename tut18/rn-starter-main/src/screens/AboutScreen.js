import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const AboutScreen = () => {
	const [data, setData] = useState([
		{ name: "vishal" },
		{ name: "suraj" },
		{ name: "vivek" },
		{ name: "vishal" },
		{ name: "suraj" },
		{ name: "vivek" },
		{ name: "vishal" },
		{ name: "suraj" },
		{ name: "vivek" },
		{ name: "vishal" },
		{ name: "suraj" },
		{ name: "vivek" },
	]);

	return (
		<View>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				renderItem={({ item, index }) => {
					// element { "item" : { name : "vishal" }, "index": "0", "separators": {}}
					return <Text
						style={styles.textStyle}
						keyExtractor={item => item.name + index}
						onPress={() => {
							setData(prev => {
								return prev.slice(0, -1)
							})
						}}>
						{item.name}
					</Text>
				}} />
		</View>
	)
}

const styles = StyleSheet.create({
	textStyle: {
		margin: 50
	},
})

export default AboutScreen  