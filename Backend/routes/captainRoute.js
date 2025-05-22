const express = require("express");
const { captainRegister, captainLogin, captainProfile } = require("../controllers/captainController");
const captainRouter = express.Router();
const {authCaptain} = require("../middlewares/auth")

captainRouter.post("/captainRegister", captainRegister);
captainRouter.post("/captainLogin", captainLogin);
captainRouter.get("/captainProfile", authCaptain, captainProfile);

module.exports = captainRouter;