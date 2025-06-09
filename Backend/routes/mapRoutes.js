const express = require("express");
const mapRouter = express.Router();
const {query} = require("express-validator");
const { userAuth } = require("../middlewares/auth");
const getCoordinates = require("../controllers/mapController");

mapRouter.get("/getCoordinates", query("address").isString().isLength({min: 3}), userAuth, getCoordinates);

module.exports = mapRouter;