import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { TrackContext } from "../context/TrackContext";
import { NavigationEvents } from "react-navigation";

const TrackListScreen = ({ navigation }) => {
  const { fetchTracks } = useContext(TrackContext);
  const tracks = useSelector((store) => store.tracks).tracks;

  return (
    <View>
      <NavigationEvents onWillFocus={fetchTracks} />
      <FlatList
        data={tracks}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TrackDetails", {
                  _id: item._id,
                });
              }}
            >
              <Text
                style={{
                  backgroundColor: "white",
                  padding: 7,
                  textTransform: "capitalize",
                  borderRadius: 4,
                  marginTop: index == 0 ? 10 : 7,
                  marginLeft: 7,
                  marginRight: 7,
                  marginBottom: index == tracks?.length - 1 ? 10 : 0,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
