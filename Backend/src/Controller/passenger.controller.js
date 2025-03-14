const Passenger = require("../schema/passengers");


// ✅ Fix function name
const createPassenger = async (req, res) => {
  try {
    const { name, age, gender, contact, email } = req.body;
    const photoUrl = req.file ? req.file.path : null;

    const newPassenger = new Passenger({ name, age, gender, contact, email, photo: photoUrl });
    await newPassenger.save();

    res.status(201).json({ message: "Passenger added successfully!", passenger: newPassenger });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.json(passengers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPassenger, getPassengers };
