const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const blackListToken = require("../models/blackListToken");
const captainModel = require("../models/captainModel");

const userAuth = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.json({success: false, message: "token not found"});
    }

    const isBlackListToken = await blackListToken.findOne({token: token});

    if(isBlackListToken) {
        return res.json({message: "Black listed token"})
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const user = await userModel.findById(decoded.id);

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

const captainAuth = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.json({ message: "Unauthorized" });
    }

    const isBlackListToken = await blackListToken.findOne({token: token});

    if(isBlackListToken){
      return res.json({message: "Unauthorized"});
    }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const captain = await captainModel.findById(decoded.id);

    req.captain = captain;

    return next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Unauthorized" });
  }
};

module.exports = {userAuth, captainAuth};
