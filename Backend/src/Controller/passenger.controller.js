const Passenger = require("../schema/passengers");


// Create a new passenger
const createPassenger = async (req, res) => {
  try {
    const { name, age, gender, contact, email } = req.body;
    const photo = req.files["photo"] ? req.files["photo"][0].path : null;
    const idCard = req.files["idCard"] ? req.files["idCard"][0].path : null;

    const newPassenger = new Passenger({ name, age, gender, contact, email, photo, idCard });
    await newPassenger.save();


    res.status(201).json({ message: "Passenger created successfully!", passenger: newPassenger });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all passengers
const getPassengers = async (req, res) => {
  try {
    const passengers = await Passenger.find();
    res.json(passengers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPassenger, getPassengers };
