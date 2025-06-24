const express = require("express");
const rideRouter = express.Router();
const { body, query } = require("express-validator");
const { createRides, getFare, confirmRides } = require("../controllers/rideController");
const { userAuth, captainAuth } = require("../middlewares/auth");

rideRouter.post(
  "/createRides",
  userAuth,
  body("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid pickup address"),
  body("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid destination address"),
  body("vehicleType")
    .isString()
    .isIn(["auto", "car", "moto"])
    .withMessage("Invalid vehicle type"),
  createRides
);

rideRouter.get(
  "/getFare",
  userAuth,
  query("pickup")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid pickup address"),
  query("destination")
    .isString()
    .isLength({ min: 3 })
    .withMessage("Invalid destination address"),
  getFare
);

rideRouter.post(
  "/confirm",
  captainAuth,
  body("rideId").isMongoId().withMessage("Invalid ride ID"),
  confirmRides
);

module.exports = rideRouter;
