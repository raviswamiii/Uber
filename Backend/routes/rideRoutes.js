const express = require("express");
const rideRouter = express.Router();
const {body} = require("express-validator");
const { createRides } = require("../controllers/rideController");
const { userAuth } = require("../middlewares/auth");

rideRouter.post("/create", 
    userAuth,
    body("pickup").isString().isLength({min: 3}).withMessage("Invalid pickup address"),
    body("destination").isString().isLength({min: 3}).withMessage("Invalid destination address"),
    body("vehicleType").isString().isIn(["auto", "car", "moto"]).withMessage("Invalid vehicle type"),
    createRides
)

module.exports = rideRouter;