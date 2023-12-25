import React, { useContext } from "react";
import { Text, View } from "react-native";

const ShowScreen = ({ navigation }) => {
  const { blogData, addBlog, removeBlog, updateBlog } = useContext(BlogContext);

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
