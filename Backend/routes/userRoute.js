const express = require("express");
const { userRegister, userLogin, userProfile, userLogout } = require("../controllers/userController");
const {userAuth} = require("../middlewares/auth");

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.get("/profile", userAuth, userProfile);
userRouter.get("/logout", userAuth, userLogout);

module.exports = userRouter;