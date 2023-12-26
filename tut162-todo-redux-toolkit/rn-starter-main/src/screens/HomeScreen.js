import React, { useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Button,
  ToastAndroid,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { removeBlog, storeAllBlog } from "../reduxToolkit/CartSlice";
import jsonServer from "../api/jsonServer";

const HomeScreen = ({ navigation }) => {
  const blogData = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const fetchAllBlog = async () => {
    let res = await jsonServer.get("/blog");
    dispatch(storeAllBlog(res.data));
  };

  useEffect(() => {
    fetchAllBlog();
    return () => {};
  }, []);

  return (
    <ScrollView style={{ padding: 7 }}>
      {blogData.length === 0 && (
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 5,
            marginBottom: 7,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>There's no blog available.</Text>
        </View>
      )}
      <FlatList
        keyExtractor={(item) => item.title}
        data={blogData}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 5,
                marginBottom: 7,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Show", {
                    id: item.id,
                  })
                }
              >
                <Text style={{ fontSize: 14 }}>{item.title}</Text>
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  gap: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {/* <AntDesign name="delete" size={15} color="black" /> */}
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Edit", {
                      id: item.id,
                    });
                  }}
                >
                  <Feather name="edit" size={15} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeBlog(item.id));
                    ToastAndroid.showWithGravityAndOffset(
                      "Blog Delete Successfully 😊",
                      ToastAndroid.LONG,
                      ToastAndroid.BOTTOM,
                      25,
                      50
                    );
                  }}
                >
                  <MaterialIcons
                    name="delete-outline"
                    size={20}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <Button
        title="Add"
        onPress={() => {
          navigation.navigate("Create");
        }}
      />
    </ScrollView>
  );
};

export default HomeScreen;
