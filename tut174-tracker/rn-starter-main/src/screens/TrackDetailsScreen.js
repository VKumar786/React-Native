import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailsScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const tracks = useSelector((store) => store.tracks).tracks;

  const { name, locations } = tracks.find((track) => track._id === _id);
  const initialCoords = locations[locations.length - 1];
  return (
    <View
      style={{
        margin: 7,
        padding: 10,
        display: "flex",
        backgroundColor: "white",
        width: "95%",
        borderRadius: 5,
      }}
    >
      <Text
        style={{ textTransform: "capitalize", fontSize: 18, paddingBottom: 10 }}
      >
        {name}
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialCoords.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...initialCoords.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline coordinates={locations.map((location) => location.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    height: 200,
    backgroundColor: "pink",
  },
});

export default TrackDetailsScreen;
