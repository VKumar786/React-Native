import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Maps = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 28.983296,
        longitude: 77.66016,
        latitudeDelta: 0.0001,
        longitudeDelta: 0.0001,
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    padding: 10,
    marginBottom: 20,
    height: "50%",
    backgroundColor: "pink",
  },
});

export default Maps;
