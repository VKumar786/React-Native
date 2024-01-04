import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";

const TrackForm = () => {
  const [TrackName, setTrackName] = useState("");
  return (
    <View>
      <TextInput
        placeholder="Name for track"
        value={TrackName}
        onChangeText={(newTrackName) => setTrackName(newTrackName)}
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
      <Button title="Record" />
    </View>
  );
};

export default TrackForm;
