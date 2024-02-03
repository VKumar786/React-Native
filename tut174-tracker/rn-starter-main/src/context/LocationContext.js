import React, { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrentLocation } from "../reduxToolkit/LocationSlice";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const dispatch = useDispatch();
  const startRecording = () => {};

  const stopRecording = () => {};

  const addLocation = (location) => {
    dispatch(addCurrentLocation(location));
  };

  return (
    <LocationContext.Provider
      value={{ startRecording, stopRecording, addLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};
