const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
const captainModel = require("../models/captainModel");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY);
};

const captainRegister = async (req, res) => {
  try {
    const { fullName, email, password, vehicle } = req.body;

    const exists = await captainModel.findOne({ email });

    if (exists) {
      return res.json({ success: false, message: "User already exist." });
    }

    if (!validator.isEmail(email)) {
      return res.json({ message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ message: "Please enter a strong password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newCaptain = new captainModel({
      fullName,
      email,
      password: hashPassword,
      vehicle,
    });

    const captain = await newCaptain.save();

    const token = createToken(captain._id);

    res.json({ success: true, captain, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

module.exports = { captainRegister };
