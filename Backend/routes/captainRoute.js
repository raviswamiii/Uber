const express = require("express");
const { captainRegister, captainLogin, captainProfile, captainLogout } = require("../controllers/captainController");
const captainRouter = express.Router();
const {authCaptain} = require("../middlewares/auth")

captainRouter.post("/captainRegister", captainRegister);
captainRouter.post("/captainLogin", captainLogin);
captainRouter.get("/captainProfile", authCaptain, captainProfile);
captainRouter.get("/captainLogout", authCaptain, captainLogout);

module.exports = captainRouter;