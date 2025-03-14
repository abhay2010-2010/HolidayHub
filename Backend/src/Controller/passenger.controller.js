const Passenger = require("../schema/passengers");


// ✅ Fix function name
const createPassenger = async (req, res) => {
  try {
    const { name, age, gender, contact, email } = req.body;

    // ✅ Handle both photo and idCard uploads
    const photoUrl = req.files["photo"] ? req.files["photo"][0].path : null;
    const idCardUrl = req.files["idCard"] ? req.files["idCard"][0].path : null;

    // ✅ Ensure all fields are provided
    if (!name || !age || !gender || !contact || !email || !photoUrl || !idCardUrl) {
      return res.status(400).json({ message: "All fields including photo and ID card are required." });
    }

    const newPassenger = new Passenger({ name, age, gender, contact, email, photo: photoUrl, idCard: idCardUrl });
    await newPassenger.save();

    res.status(201).json({ message: "Passenger added successfully!", passenger: newPassenger });
  } catch (error) {
    console.error("Error adding passenger:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
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
