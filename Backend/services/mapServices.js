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

module.exports = getAddressCoordinate;
