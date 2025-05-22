const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userModel = require("../models/userModel");
const blackListToken = require("../models/blackListToken");

const createToken = (id) => {
    return jwt.sign({id}, process.env.SECRET_KEY);
}

const userRegister = async (req, res) => {
    try {
        const {fullName, email, password} = req.body;

        const exists = await userModel.findOne({email});

        if(exists) {
            return res.json({success: false, message: "User already exists."});
        }

        if(!validator.isEmail(email)){
            return res.json({message: "Please enter a valid email."});
        }

        if(password.length < 8) {
            return res.json({message: "Please enter a strong password."});
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
        res.json({success: false, message: error.message})
    }
}

const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email});
         
        if(!user) {
            return res.json({success: false, message: "User does not exist."})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
            const token = createToken(user._id);
            res.cookie("token", token);
            res.json({success: true, token})
        } else{
            res.json({success: false, message: "Invalid credentials"});
        }

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

const userProfile = async (req, res) => {
    try {
        res.send(req.user)
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

const userLogout = async (req, res) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
        res.clearCookie("token")
        await blackListToken.create({ token});
        res.json({success: true, message: "You've been logged out."})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.messsage})
    }
}

module.exports = {userRegister, userLogin, userProfile, userLogout};