const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
  contact: { type: String },
  email: { type: String },
  photo: { type: String }, // Store image file path
  idCard: { type: String }, // Store PDF file path
});

const Passenger = mongoose.model("Passengers", passengerSchema);
module.exports = Passenger;
