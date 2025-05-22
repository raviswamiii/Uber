const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 84600
    }
})

const blackListToken = mongoose.model("blackListToken", blackListTokenSchema);

module.exports = blackListToken;