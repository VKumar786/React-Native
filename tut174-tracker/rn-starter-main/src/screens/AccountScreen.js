import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  ToastAndroid,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import { removeToken } from "../reduxToolkit/AuthSlice";
import { SafeAreaView } from "react-navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        height: "70%",
        marginTop: Platform.OS === "android" ? 50 : 0,
      }}
      forceInset={{ top: "always" }}
    >
      <Text style={{ marginVertical: 3, fontSize: 25, fontWeight: "700" }}>
        Create Track
      </Text>
      <Button
        title="Sign Out"
        onPress={() => {
          AsyncStorage.setItem("authToken", "");
          dispatch(removeToken());
          ToastAndroid.showWithGravityAndOffset(
            "Sign Out Successfully",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
          navigation.navigate("Signup");
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
