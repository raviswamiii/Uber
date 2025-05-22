const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName:{
        firstName:{type: String, required: true},
        lastName: {type: String}
    },
    email:{type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = userModel;