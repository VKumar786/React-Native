import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addToken } from "../reduxToolkit/AuthSlice";

const LoadingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(async () => {
    const token = await AsyncStorage.getItem("authToken");
    if (token) {
      dispatch(addToken({ token }));
      navigation.navigate("TrackList");
    } else {
      navigation.navigate("Signup");
    }
  }, []);

  return null;
};

export default LoadingScreen;
