const express = require("express");
const { captainRegister, captainLogin, captainProfile, captainLogout } = require("../controllers/captainController");
const captainRouter = express.Router();
const {captainAuth} = require("../middlewares/auth")

captainRouter.post("/captainRegister", captainRegister);
captainRouter.post("/captainLogin", captainLogin);
captainRouter.get("/captainProfile", captainAuth, captainProfile);
captainRouter.get("/captainLogout", captainAuth, captainLogout);

module.exports = captainRouter;