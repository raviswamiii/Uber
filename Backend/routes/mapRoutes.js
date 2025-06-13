const express = require("express");
const mapRouter = express.Router();
const {query} = require("express-validator");
const { userAuth } = require("../middlewares/auth");
const {getCoordinates, getDistanceAndTime, getPlaceSuggestions} = require("../controllers/mapController");

mapRouter.get("/getCoordinates", query("address").isString().isLength({min: 3}), userAuth, getCoordinates);
mapRouter.get("/getDistance", query("origin").isString().isLength({min: 3}), query("destination").isString().isLength({min: 3}), userAuth, getDistanceAndTime);
mapRouter.get("/getSuggestions", query("input").isString().isLength({min: 3}), userAuth, getPlaceSuggestions);

module.exports = mapRouter;