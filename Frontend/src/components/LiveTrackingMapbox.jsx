import React, { useState, useEffect } from "react";
import Map, { Marker } from 'react-map-gl';

const LiveTrackingMapbox = () => {
  const [currentPosition, setCurrentPosition] = useState({
    lat: 12.9716, // Default to Bangalore
    lng: 77.5946,
  });

  useEffect(() => {
    // Initial fetch
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ lat: latitude, lng: longitude });
    });

    // Watch position updates
    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition({ lat: latitude, lng: longitude });
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <Map
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_MAPS_API}
      initialViewState={{
        longitude: currentPosition.lng,
        latitude: currentPosition.lat,
        zoom: 15,
      }}
      longitude={currentPosition.lng}
      latitude={currentPosition.lat}
      zoom={15}
      mapStyle="mapbox://styles/mapbox/streets-v11"
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
