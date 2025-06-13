const {validationResult} = require("express-validator");
const {getAddressCoordinate} = require("../services/mapServices");
const { getDistanceTime } = require('../services/mapServices');
const { getAutoCompleteSuggestions } = require('../services/mapServices');

const getCoordinates = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(404).json({message: errors.array()});
    }

    const {address} = req.query;

    try {
        const coordinates = await getAddressCoordinate(address);
        res.status(200).json(coordinates);
    } catch (error) {
        console.log(error)
    }
} 


const getDistanceAndTime = async (req, res) => {
    try {
        const { origin, destination } = req.query;

        if (!origin || !destination) {
            return res.status(400).json({ error: 'Origin and destination are required' });
        }

        const result = await getDistanceTime(origin, destination);

        res.status(200).json({
            origin,
            destination,
            distance_meters: result.distance,
            duration_seconds: result.duration,
            distance_km: (result.distance / 1000).toFixed(2),
            duration_minutes: (result.duration / 60).toFixed(2),
        });
    } catch (error) {
        console.error("Error in getDistanceAndTime controller:", error.message);
        res.status(500).json({ error: 'Failed to get distance and time', details: error.message });
    }
};

const getPlaceSuggestions = async (req, res) => {
    try {
        const { input } = req.query;

        if (!input) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const suggestions = await getAutoCompleteSuggestions(input);

        res.status(200).json({
            input,
            suggestions
        });
    } catch (error) {
        console.error('Error in getPlaceSuggestions controller:', error.message);
        res.status(500).json({ error: 'Failed to fetch autocomplete suggestions', details: error.message });
    }
};


module.exports = {getCoordinates, getDistanceAndTime, getPlaceSuggestions};