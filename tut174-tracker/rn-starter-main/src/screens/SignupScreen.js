import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import trackerApi from "../api/tracker";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../reduxToolkit/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = ({ navigation }) => {
  // const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <View
      style={{
        margin: 7,
        padding: 10,
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        // flexDirection: "row",
        width: "95%",
        height: "70%",
      }}
    >
      <Text style={{ marginVertical: 3, fontSize: 25, fontWeight: "700" }}>
        Sign Up for Tacker
      </Text>
      <Text style={{ marginVertical: 3, fontSize: 15, fontWeight: "700" }}>
        Email
      </Text>
      <TextInput
        placeholder="Enter Email"
        value={data?.email}
        onChangeText={(email) =>
          setData((prev) => {
            return { ...prev, email };
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
        Password
      </Text>
      <TextInput
        secureTextEntry
        placeholder="Enter Password"
        value={data?.password}
        onChangeText={(password) =>
          setData((prev) => {
            return { ...prev, password };
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
        title="Sign Up"
        onPress={async () => {
          try {
            let res = await trackerApi.post("/auth/signup", data);
            await AsyncStorage.setItem("authToken", res.data.token);
            dispatch(addToken(res.data));
            ToastAndroid.showWithGravityAndOffset(
              "Sign Up Successfully 😊",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
            navigation.navigate("TrackList");
          } catch (e) {
            ToastAndroid.showWithGravityAndOffset(
              "Something went wrong on Sign Up",
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
          }
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signin");
        }}
      >
        <Text style={{ color: "#02ccfe", marginTop: 7 }}>
          Already have an account?
        </Text>
        <Text style={{ color: "#02ccfe" }}>Sign In Instead.</Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: null,
  };
};

const styles = StyleSheet.create({});

export default SignupScreen;
