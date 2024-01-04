import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TrackForm from "../components/TrackForm";
import Maps from "../components/Maps";

const TrackCreateScreen = () => {
  return (
    <View
      style={{
        marginTop: Platform.OS === "android" ? 40 : 0,
        padding: 10,
        width: "95%",
        height: "70%",
      }}
    >
      <Text style={{ marginVertical: 3, fontSize: 25, fontWeight: "700" }}>
        Create Track
      </Text>
      <Maps />
      <TrackForm />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
