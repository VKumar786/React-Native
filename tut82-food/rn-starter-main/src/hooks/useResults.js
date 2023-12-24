import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [isLoading, setIsLoading] = useState(true);
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
      // console.warn(res.data.businesses);
      setResults(res.data.businesses);
      setIsLoading(false);
    } catch (error) {
      console.warn(error);
      setErrMsg("Something Went Wrong");
    }
  };

  return [searchApi, results, errMsg, isLoading, setIsLoading];
};
