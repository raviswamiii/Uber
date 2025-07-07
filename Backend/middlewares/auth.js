const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const blackListToken = require("../models/blackListToken");
const captainModel = require("../models/captainModel");

const userAuth = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Token not found" });
  }

  const isBlackListToken = await blackListToken.findOne({ token });
  if (isBlackListToken) {
    return res.status(401).json({ success: false, message: "Blacklisted token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("userAuth error:", error);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

const captainAuth = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Token not found" });
  }

  const isBlackListToken = await blackListToken.findOne({ token });
  if (isBlackListToken) {
    return res.status(401).json({ success: false, message: "Blacklisted token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const captain = await captainModel.findById(decoded.id);

    if (!captain) {
      return res.status(401).json({ success: false, message: "Captain not found" });
    }

    req.captain = captain;
    next();
  } catch (error) {
    console.error("captainAuth error:", error);
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

module.exports = { userAuth, captainAuth };
