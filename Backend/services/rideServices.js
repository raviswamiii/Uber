const rideModel = require("../models/rideModel");
const { getDistanceTime } = require("./mapServices");
const crypto = require("crypto");

const fareCalculation = async ({ pickup, destination }) => {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const distanceTime = await getDistanceTime(pickup, destination);

  const baseFare = {
    auto: 30,
    car: 50,
    moto: 20,
  };

  const perKMRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };

  console.log(distanceTime);

  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance / 1000) * perKMRate.auto +
        (distanceTime.duration / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance / 1000) * perKMRate.car +
        (distanceTime.duration / 60) * perMinuteRate.car
    ),
    moto: Math.round(
      baseFare.moto +
        (distanceTime.distance / 1000) * perKMRate.moto +
        (distanceTime.duration / 60) * perMinuteRate.moto
    ),
  };

  return fare;
};

const getOtp = (num) => {
  const generateOtp = (num) => {
    const otp = crypto
      .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
      .toString();
    return otp;
  };

  return generateOtp(num);
};

const createRide = async ({ user, pickup, destination, vehicleType }) => {
  if (!user || !pickup || !destination || !vehicleType) {
    throw new Error("All fields are required");
  }

  const fare = await fareCalculation({ pickup, destination });
  console.log(fare);

  const ride = rideModel.create({
    user,
    pickup,
    destination,
    otp: getOtp(4),
    fare: fare[vehicleType],
  });

  return ride;
};

const confirmRide = async ({ rideId, captain }) => {
    console.log("📥 confirmRide called with:", rideId, captain?._id);
  if (!rideId) {
    throw new Error("Ride id is required");
  }

  await rideModel.findOneAndUpdate(
    {
      _id: rideId,
    },
    {
      status: "accepted",
      captain: captain._id,
    }
  );

  const ride = await rideModel
    .findOne({
      _id: rideId,
    })
    .populate("user")
    .populate("captain")
    .select("+otp");

  if (!ride) {
    throw new Error("Ride not found");
  }

  return ride;
};

module.exports = { fareCalculation, createRide, confirmRide };
