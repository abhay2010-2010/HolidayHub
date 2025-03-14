const express = require("express");
// const { createPassenger, getPassengers } = require("../controllers/passenger.controller");
// const upload = require("../middleware/upload"); // ✅ Correct Import
 const {createPassenger,getPassengers}=require("../Controller/passenger.controller")
 const upload=require("../middleware/Upload")
const router = express.Router();

// ✅ Upload single image
router.post("/", upload.fields([{ name: "photo" }, { name: "idCard" }]), createPassenger);

// ✅ Get all passengers
router.get("/", getPassengers);

module.exports = router;
