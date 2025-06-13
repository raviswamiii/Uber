const axios = require("axios");

const getAddressCoordinate = async (address) => {
    const MAPS_API_KEY = process.env.MAPBOX_MAPS_API;
    const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${MAPS_API_KEY}`;
  try {
    const response = await axios.get(URL);
    const features = response.data.features;

    if (features && features.length > 0) {
      const [lat, lng] = features[0].center;
      return { lat, lng };
    } else {
      throw new error("Location not found");
    }
  } catch (error) {
    console.log(error);
    throw new error("Unable to fetch location");
  }
};


const getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const MAPBOX_API = process.env.MAPBOX_MAPS_API;

    try {
        // Step 1: Geocode origin and destination
        const geocode = async (place) => {
            const geoUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(place)}.json?access_token=${MAPBOX_API}`;
            const geoRes = await axios.get(geoUrl);
            if (geoRes.data.features.length === 0) {
                throw new Error(`Location not found: ${place}`);
            }
            return geoRes.data.features[0].center; // [longitude, latitude]
        };

        const [originCoord, destinationCoord] = await Promise.all([
            geocode(origin),
            geocode(destination),
        ]);

        // Step 2: Get distance and duration from Directions API
        const directionsUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${originCoord[0]},${originCoord[1]};${destinationCoord[0]},${destinationCoord[1]}?geometries=geojson&access_token=${MAPBOX_API}`;

        const directionsRes = await axios.get(directionsUrl);
        if (!directionsRes.data.routes || directionsRes.data.routes.length === 0) {
            throw new Error("No routes found between origin and destination");
        }

        const route = directionsRes.data.routes[0];

        return {
            distance: route.distance, // in meters
            duration: route.duration, // in seconds
        };

    } catch (err) {
        console.error(err);
        throw err;
    }
};

const getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Query is required');
    }

    const MAPBOX_API = process.env.MAPBOX_MAPS_API;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(input)}.json?autocomplete=true&access_token=${MAPBOX_API}`;

    try {
        const response = await axios.get(url);

        if (response.data.features && response.data.features.length > 0) {
            return response.data.features
                .map(feature => feature.place_name)
                .filter(Boolean);
        } else {
            throw new Error('Unable to fetch suggestions');
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
};



module.exports = {getAddressCoordinate, getDistanceTime, getAutoCompleteSuggestions};
