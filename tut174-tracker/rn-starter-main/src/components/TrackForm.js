import React, { useContext, useEffect } from "react";
import { Button, TextInput, View, Text } from "react-native";
import { LocationContext } from "../context/LocationContext";
import { useSelector } from "react-redux";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const { name, recording, locations } = useSelector((state) => state.location);
  const { startRecording, stopRecording, changeName } =
    useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <View>
      <TextInput
        placeholder="Enter Track Name"
        value={name}
        onChangeText={changeName}
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
      <View style={{ padding: 7 }}>
        {!recording ? (
          <Button title="Start Recording" onPress={startRecording} />
        ) : (
          <Button title="Stop" onPress={stopRecording} />
        )}
      </View>
      <View style={{ padding: 7 }}>
        {!recording && name.length && locations.length ? (
          <Button title="Save Track" onPress={saveTrack} />
        ) : null}
      </View>
    </View>
  );
};

export default TrackForm;
