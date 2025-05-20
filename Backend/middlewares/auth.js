const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const blackListToken = require("../models/blackListTokenModel");

const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.json({ message: "Unauthorized" });
    }

    const isBlackListToken = await blackListToken.findOne({token: token});

    if(isBlackListToken){
      return res.json({message: "Unauthorized"});
    }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.findById(decoded.id);

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Unauthorized" });
  }
};

module.exports = authUser;
