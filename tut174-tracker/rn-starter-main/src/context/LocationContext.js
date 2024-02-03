import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_current_location,
  add_location,
  change_name,
  start_recording,
  stop_recording,
} from "../reduxToolkit/LocationSlice";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { currentLocation, recording } = useSelector((state) => state.location);

  const startRecording = () => {
    dispatch(start_recording());
  };

  const stopRecording = () => {
    dispatch(stop_recording());
  };

  const addLocation = (location) => {
    dispatch(add_current_location(location));
    if (recording) {
      dispatch(add_location(location));
    }
  };

  const changeName = (name) => {
    dispatch(change_name(name));
  };

  return (
    <LocationContext.Provider
      value={{ startRecording, stopRecording, addLocation, changeName }}
    >
      {children}
    </LocationContext.Provider>
  );
};
