import { useState, useEffect, useRef } from "react";
import {
  Accuracy,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);
  const subscriber = useRef(null);

  useEffect(() => {
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) throw new Error("Location permission not granted");

        const sub = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
        subscriber.current = sub;
      } catch (error) {
        setErr(error);
      }
    };

    if (shouldTrack) startWatching();
    else {
      subscriber.current?.remove();
      subscriber.current = null;
    }
    return () => {
      subscriber.current?.remove();
    };
  }, [shouldTrack, callback]);

  return [err];
};
