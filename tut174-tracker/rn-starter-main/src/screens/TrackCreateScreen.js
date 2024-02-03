import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import TrackForm from "../components/TrackForm";
import Maps from "../components/Maps";
import { LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";
import { useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
  const { recording } = useSelector((state) => state.location);
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(
    isFocused || recording,
    useCallback((location) => addLocation(location), [recording])
  );

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

TrackCreateScreen.navigationOptions = {
  tabBarLabel: "Add Track",
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="add" size={24} color="white" />
  ),
};

export default withNavigationFocus(TrackCreateScreen);
