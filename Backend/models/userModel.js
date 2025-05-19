const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First name must be at least 3 character long"],
    },
    
    lastName: {
      type: String,
      minLength: [3, "Last name must be at least 3 characters long"],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, "Email must be at least 5 characters long"],
  },

  password: { type: String, required: true },

  socketId: { type: String },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

module.exports = userModel;
