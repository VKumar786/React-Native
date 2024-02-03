import React, { useContext } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Circle, Polyline } from "react-native-maps";
import { useSelector } from "react-redux";
import { LocationContext } from "../context/LocationContext";

const Maps = () => {
  const {} = useContext(LocationContext);
  const { currentLocation, locations } = useSelector((state) => state.location);

  if (!currentLocation) {
    return <ActivityIndicator size={"large"} style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
      <Polyline coordinates={locations.map((location => location.coords))} />
    </MapView>
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
