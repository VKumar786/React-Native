import React, { useState, useEffect, useReducer } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  Button,
  Linking,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import yelp from "../api/yelp";
import { withNavigation } from "react-navigation";
import useResults from "../hooks/useResults";

const RestaurantList = withNavigation(({ title, data, navigation }) => {
  return (
    <View
      style={{
        padding: 7,
        backgroundColor: "white",
        borderRadius: 2,
        marginVertical: 7,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 6,
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          display: "flex",
          flexDirection: "row",
          // overflow: "scroll",
          gap: 10,
          overflow: "scroll",
        }}
      >
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          horizontal
          // style={{
          //   display: "flex",
          //   flexDirection: "row",
          // overflow: "scroll",
          //   gap: 10,
          //   overflow: "scroll",
          // }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  navigation.navigate("Details", { id: item.id });
                }}
              >
                <View
                  style={{
                    paddingBottom: 5,
                    marginRight: index < data.length - 1 ? 7 : 0,
                  }}
                >
                  <Image
                    source={{ uri: item.image_url }}
                    width={135}
                    height={135}
                    style={{ borderRadius: 7 }}
                  />
                  <Text>
                    {item.name.slice(0, 15)}
                    {(item.length > 16) & "..."}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#aaa" }}>
                    {item.rating} Stars, {item.review_count} Reviews
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        {/* {data.map((item, idx) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate("Details");
              }}
            >
              <View
                style={{
                  paddingBottom: 5,
                  marginRight: idx < data.length - 1 ? 7 : 0,
                }}
              >
                <Image
                  source={{ uri: item.image_url }}
                  width={135}
                  height={135}
                  style={{ borderRadius: 7 }}
                />
                <Text>
                  {item.name.slice(0, 15)}
                  {(item.length > 16) & "..."}
                </Text>
                <Text style={{ fontSize: 12, color: "#aaa" }}>
                  {item.rating} Stars, {item.review_count} Reviews
                </Text>
              </View>
            </TouchableOpacity>
          );
        })} */}
      </ScrollView>
    </View>
  );
});

const SearchBar = ({ search, setSearch, onTermSubmit }) => {
  return (
    <View style={{ position: "relative" }}>
      <View style={{ position: "absolute", top: 10, zIndex: 2, left: 7 }}>
        <AntDesign name="search1" size={20} color="#aaa" />
      </View>
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={(e) => setSearch(e)}
        autoCorrect={false}
        autoCapitalize="none"
        onEndEditing={() => onTermSubmit()}
        style={{
          backgroundColor: "white",
          paddingTop: 7,
          paddingRight: 7,
          paddingBottom: 7,
          paddingLeft: 32,
          fontSize: 17,
          borderRadius: 5,
          marginBottom: 5,
          color: "#262626",
        }}
      />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [searchApi, results, errMsg, isLoading] = useResults();

  return (
    <ScrollView style={{ padding: 8, flex: 1 }}>
      <SearchBar
        search={search}
        setSearch={setSearch}
        onTermSubmit={() => {
          searchApi(search);
        }}
      />
      {errMsg.length === 0 ? (
        <Text style={{ padding: 7 }}>Hi There 👋 {search} </Text>
      ) : (
        <Text style={{ padding: 7, color: "red" }}>⚠️ {errMsg}</Text>
      )}
      {!isLoading ? (
        <View>
          {results.filter((item) => item.price === "$").length > 0 && (
            <RestaurantList
              title={"Cost Effective"}
              data={results.filter((item) => item.price === "$")}
            />
          )}
          {results.filter((item) => item.price === "$$").length > 0 && (
            <RestaurantList
              title={"Bit Pricer"}
              data={results.filter((item) => item.price === "$$")}
            />
          )}
          {results.filter((item) => item.price === "$$$").length > 0 && (
            <RestaurantList
              title={"Big Spender! 😮"}
              data={results.filter((item) => item.price === "$$$")}
            />
          )}
          <Text></Text>
        </View>
      ) : (
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            // source={{
            //   uri: "https://i.pinimg.com/originals/ee/1d/08/ee1d081c5bdf966b058c1a6588e73e8a.gif",
            // }}
            source={require("../../assets/loader.gif")}
            // style={{ width: 100, height: 100 }}
          />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
