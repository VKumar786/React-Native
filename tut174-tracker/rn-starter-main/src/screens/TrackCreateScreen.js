import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import TrackForm from "../components/TrackForm";
import Maps from "../components/Maps";
import { LocationContext } from "../context/LocationContext";
import useLocation from "../../hooks/useLocation";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  // Same Code
  // 1.
  // const [err] = useLocation((location) => {
  // console.warn(JSON.stringify(location));
  // addLocation(location);
  // });
  // 2.
  // const [err] = useLocation((location) => addLocation(location) });

  const [err] = useLocation(addLocation);

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
