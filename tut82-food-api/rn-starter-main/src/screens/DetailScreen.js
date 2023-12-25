import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View, Image } from "react-native";
import yelp from "../api/yelp";

const DetailScreen = ({ navigation }) => {
  const [Item, setItem] = useState(null);

  const fetchData = async () => {
    try {
      let res = await yelp.get(`/${navigation.getParam("id", "")}`);
      setItem(res.data);
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 18,
          color: "#262626",
          fontWeight: "bold",
          marginBottom: 6,
          textTransform: "capitalize",
        }}
      >
        {Item?.name}
      </Text>
      {Item && (
        <FlatList
          // keyExtractor={(item) => item.id}
          data={Item.photos}
          // horizontal
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                style={{
                  paddingBottom: 5,
                  marginRight: index < Item.photos.length - 1 ? 7 : 0,
                }}
              >
                <Image
                  source={{ uri: item }}
                  width={135}
                  height={135}
                  style={{ borderRadius: 7 }}
                />
              </View>
            );
          }}
        />
      )}
    </ScrollView>
  );
};

export default DetailScreen;
