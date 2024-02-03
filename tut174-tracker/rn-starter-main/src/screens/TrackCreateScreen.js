import "../_mockLocation";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import TrackForm from "../components/TrackForm";
import Maps from "../components/Maps";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);
  const { addLocation } = useContext(LocationContext);

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) throw new Error("Location permission not granted");

      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          // console.warn(JSON.stringify(location));
          addLocation(location);
        }
      );
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

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
      {err && <Text>Please enable location services</Text>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
