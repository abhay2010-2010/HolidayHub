const express = require("express");
const { getPassengers, createPassenger } = require("../Controller/passenger.controller");
const upload = require("../middleware/upoad");

const router = express.Router();

// POST request to create a passenger with file uploads
router.post("/", upload.fields([{ name: "photo", maxCount: 1 }, { name: "idCard", maxCount: 1 }]), createPassenger);

// GET request to retrieve all passengers
router.get("/", getPassengers);

module.exports = router;
