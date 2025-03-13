require("dotenv").config();
const express = require("express");
const cors = require("cors");

const passengerRoutes = require("./routes/passenger.route");
const dbConnect = require("./config/config");
const url=process.env.MONGO_URL

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files

// Connect to Database


app.use("/passengers", passengerRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Passenger API" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
    try {
    //    await dbConnect
       console.log(`🚀 Server running on http://localhost:${PORT}`)
    } catch (error) {
        console.log(error);
    }
   
});

