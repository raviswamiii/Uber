const { validationResult } = require("express-validator");
const { createRide, fareCalculation, confirmRide } = require("../services/rideServices");
const {
  getCaptainsInTheRadius,
  getAddressCoordinate,
} = require("../services/mapServices");
const { sendMessageToSocketId } = require("../socket");
const { captainLogin } = require("./captainController");
const rideModel = require("../models/rideModel");

const createRides = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId, pickup, destination, vehicleType } = req.body;

  try {
    const ride = await createRide({
      user: req.user._id,
      pickup,
      destination,
      vehicleType,
    });

    const pickupCoordinates = await getAddressCoordinate(pickup);

    const captainsInRadius = await getCaptainsInTheRadius(
      pickupCoordinates.lng,
      pickupCoordinates.ltd,
      10
    );

    ride.otp = "";

    const rideWithUser = await rideModel
      .findOne({ _id: ride._id })
      .populate("user");

    captainsInRadius.map((captain) => {
      sendMessageToSocketId(captain.socketId, {
        event: "newRide",
        data: rideWithUser,
      });
    });

    res.status(201).json(ride);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getFare = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { pickup, destination } = req.query;

  try {
    const fare = await fareCalculation({ pickup, destination });
    return res.status(200).json(fare);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const confirmRides = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { rideId, captainId } = req.body;

  try {
    const ride = await confirmRide({ rideId, captainId });

    sendMessageToSocketId(ride.user.socketId, {
      event: "rideConfirmed",
      data: ride,
    });
    
    res.status(200).json(ride);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createRides, getFare, confirmRides };
