import React, { useState, useContext } from "react";
import { View, Text, ToastAndroid, TextInput, Button } from "react-native";
import BlogContext from "../context/blogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlog } = useContext(BlogContext);
  const [data, setData] = useState({
    id: Math.floor(Date.now() / 1000),
    title: "",
    content: "",
  });

  return (
    <View
      style={{
        margin: 7,
        padding: 10,
      }}
    >
      <Text style={{ marginVertical: 3, fontSize: 15, fontWeight: "700" }}>
        Title
      </Text>
      <TextInput
        placeholder="Enter Title"
        value={data?.title}
        onChangeText={(title) =>
          setData((prev) => {
            return { ...prev, title };
          })
        }
        autoCorrect={false}
        autoCapitalize="none"
        style={{
          backgroundColor: "white",
          padding: 7,
          fontSize: 14,
          borderRadius: 5,
          marginBottom: 10,
          color: "#262626",
        }}
      />
      <Text style={{ marginVertical: 3, fontSize: 15, fontWeight: "700" }}>
        Content
      </Text>
      <TextInput
        placeholder="Enter Content"
        value={data?.content}
        multiline
        numberOfLines={1}
        onChangeText={(content) =>
          setData((prev) => {
            return { ...prev, content };
          })
        }
        autoCorrect={false}
        autoCapitalize="none"
        style={{
          backgroundColor: "white",
          padding: 7,
          fontSize: 14,
          borderRadius: 5,
          marginBottom: 10,
          color: "#262626",
        }}
      />
      <Button
        title="Add Blog"
        onPress={() => {
          addBlog(data);
          ToastAndroid.showWithGravityAndOffset(
            "Blog Added Successfully 😊",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default CreateScreen;
