const express = require("express");
const {registerUser, loginUser, userProfile} = require("../controllers/userController");
const authUser = require("../middlewares/auth");
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", authUser, userProfile);

module.exports = userRouter;
