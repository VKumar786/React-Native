<!--
   TODO: 82. App Overview
   TODO: 83. Important Note About Project Generation
   ? npx create-expo-app food 
   ? npx expo install @expo/webpack-config@^19.0.0
   ? npx expo-cli init food
   TODO: 86. Yelp Signup
   TODO: 87. Yelp Walkthrough
   TODO: 88. React Navigation
   ? npm install react-navigation
   TODO: 89. Required React Navigation Installation Update
   TODO: 92. Starting the SearchBar
   TODO: 93. Displaying Icons
   TODO: 99. Making the Request
   ? https://docs.developer.yelp.com/reference/v3_business_search
   TODO: 100. Error Handling
   TODO: 101. Running an Initial Search
   TODO: 102. Incorrect Hook Name in Slide
   TODO: 103. The UseEffect Hook
   TODO: 104. Extracting Hook Logic
   ! Hooks folder struct
   !  navigation.navigate("Details", { id: item.id });
   ! navigation.getParam("id", "")
   ! <ScrollView style={{ padding: 8, flex: 1 }}>
   ! import { withNavigation } from "react-navigation"; 
      * import useResults from "../hooks/useResults";
      * const RestaurantList = withNavigation(({ title, data }) => {
-->

 <TextInput
   placeholder="Search..."
   value={search}
   onChangeText={(e) => setSearch(e)}
   autoCorrect={false}
   autoCapitalize="none"
   onEndEditing={() => onTermSubmit()}
/>

import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer vpyI5izLgQwAXW7_lbbiIGabDOVGiusT7h4ogUDkUAILQagiPfuefQutfaVKa3ngmBlhkMJQuduQOnDj7FgYFLkaRsIAqNDN7GH7uY_cStQOIZXYx",
  },
});



<!-- use Result Hook -->
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    searchApi("pasta");
    return () => {};
  }, []);

  const searchApi = async (term) => {
    try {
      let res = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san joe",
        },
      });
      setResults(res.data.businesses);
      setIsLoading(false);
    } catch (error) {
      console.warn(error);
      setErrMsg("Something Went Wrong");
    }
  };

  return [searchApi, results, errMsg];
};


const [searchApi, results, errMsg] = useResults();

  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}

<FlatList
  keyExtractor={(item) => item.id}
  data={data}
  horizontal