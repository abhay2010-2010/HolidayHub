const express = require("express");
const XYZ=require("../middleware/Upload")
// const upload = require("../middleware/Upload"); // ✅ Correct import
// console.log("upload middleware",upload);
 // ✅ Import correctly
const {createPassengers,getPassengers}=require("../Controller/passenger.controller");
const router = express.Router();

// ✅ Upload single image
router.post("/", XYZ.single("photo"), createPassengers);

// ✅ Get all passengers
router.get("/", getPassengers);

module.exports = router;