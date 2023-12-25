import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const ShowScreen = ({ navigation }) => {
  const blogData = useSelector((state) => state.blog);
  return (
    <View
      style={{
        margin: 7,
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: "#262626",
          fontWeight: "bold",
          marginBottom: 6,
          textTransform: "capitalize",
        }}
      >
        {
          blogData.filter(
            (item) => item.id === navigation.getParam("id", "")
          )[0].title
        }
      </Text>
      <Text>
        {
          blogData.filter(
            (item) => item.id === navigation.getParam("id", "")
          )[0].content
        }
      </Text>
    </View>
  );
};

export default ShowScreen;
