import * as Location from "expo-location";

const tenMetersWithDegrees = 0.00005;

const getLocation = (increment) => {
  return {
    timestamp: Date.now(),
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: 28.98145564043164 + increment * tenMetersWithDegrees,
      longitude: 77.66707490605343 + increment * tenMetersWithDegrees,
    },
  };
};

// 28.98145564043164, 77.66707490605343/

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
