const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userModel = require("../models/userModel");
const blackListToken = require("../models/blackListTokenModel");

const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET_KEY);
}

const registerUser = async (req, res) => {
  try {
    const {fullName, email, password} = req.body;

    const exists = await userModel.findOne({email});

    if(exists) {
        return res.json({success: false, message: "User already exists"});
    }

    if(!validator.isEmail(email)) {
        return res.json({success: false, message: "Please enter a valid email"});
    }

    if(password.length < 8) {
        return res.json({success: false, message: "Please enter a strong password"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
        fullName,
        email,
        password: hashPassword
    })

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({success: true, token});

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user) {
       return res.json({success: false, message: "User doesn't exist"});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(isMatch) {
      const token = createToken(user._id);
      res.cookie("token", token)
      return res.json({success: true, token});
    } else {
      return res.json({success: false, message: "Invalid Credentials"})
    }
  } catch (error) {
    console.log(error);
    res.json({success: false, message: error.message})
  }
}

const userProfile = async (req, res, next) => {
  res.json(req.user);
}

const userLogout = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blackListToken.create({token});
  res.json({success: true, message: "Logout successful"})
}

module.exports = { registerUser, loginUser, userProfile, userLogout };
