import React, { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";

const LiveTrackingMapbox = () => {
  const defaultLat = 12.9716; 
  const defaultLng = 77.5946;

  const [currentPosition, setCurrentPosition] = useState({
    lat: defaultLat,
    lng: defaultLng,
  });

  const [viewState, setViewState] = useState({
    latitude: defaultLat,
    longitude: defaultLng,
    zoom: 15,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("Initial Position:", latitude, longitude);
          setCurrentPosition({ lat: latitude, lng: longitude });
          setViewState((prev) => ({
            ...prev,
            latitude,
            longitude,
          }));
        },
        (error) => console.error("Location error:", error),
        { enableHighAccuracy: true }
      );

      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
          setViewState((prev) => ({
            ...prev,
            latitude,
            longitude,
          }));
        },
        (error) => console.error("Watch error:", error),
        { enableHighAccuracy: true }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      console.error("Geolocation not supported");
    }
  }, []);

  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_MAPS_API}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v12"
      style={{ width: "100%", height: "100vh" }}
    >
      <Marker
        longitude={currentPosition.lng}
        latitude={currentPosition.lat}
        color="red"
      />
    </Map>
  );
};

export default LiveTrackingMapbox;
