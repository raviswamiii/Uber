const mongoose = require("mongoose");

const captainSchema = new mongoose.Schema({
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String },
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  socketId: { type: String },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: { type: String, required: true },
    plate: { type: String, required: true },
    capacity: {
      type: Number,
      required: true,
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },
  location: {
    ltd: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;
