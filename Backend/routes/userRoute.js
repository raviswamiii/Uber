const express = require("express");
const { userRegister, userProfile, userLogin, userLogout } = require("../controllers/userController");
const userAuth = require("../middleware/auth");
const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.get("/profile", userAuth, userProfile);
userRouter.get("/logout", userAuth, userLogout);

module.exports = userRouter