import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to mainFlow"
        onPress={() => {
          navigation.navigate("TrackDetails");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
