const express = require("express");
const { captainRegister } = require("../controllers/captainController");
const captainRouter = express.Router();

captainRouter.post("/captainRegister", captainRegister);

module.exports = captainRouter;