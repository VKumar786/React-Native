import React, { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { create_track, fetch_track } from "../reduxToolkit/TrackSlice";
import trackerApi from "../api/tracker";

export const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
  const dispatch = useDispatch();

  const fetchTracks = async () => {
    try {
      const res = await trackerApi.get("/tracks");
      dispatch(fetch_track(res.data));
    } catch (error) {
      console.warn(error);
    }
  };

  const createTrack = async (name, locations) => {
    try {
      const res = await trackerApi.post("/tracks", {
        name,
        locations,
      });
      dispatch(create_track({ name, locations }));
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <TrackContext.Provider value={{ createTrack, fetchTracks }}>
      {children}
    </TrackContext.Provider>
  );
};
