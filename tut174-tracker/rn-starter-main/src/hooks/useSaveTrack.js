import { useState, useEffect, useRef, useContext } from "react";
import { TrackContext } from "../context/TrackContext";
import { LocationContext } from "../context/LocationContext";
import { useSelector } from "react-redux";
import { navigate } from "../navigationRef";

export default () => {
  const { locations, name } = useSelector((state) => state.location);
  const { createTrack } = useContext(TrackContext);
  const { resetData } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    resetData();
    navigate("TrackList");
  };

  return [saveTrack];
};
