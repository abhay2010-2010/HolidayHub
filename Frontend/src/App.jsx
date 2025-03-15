import React, { useState, useEffect } from "react";
import axios from "axios";
import PassengerForm from "./Components/Passangerform";
// import PasssngerData from "./Components/PasssngerData";
import Navbar from "./Components/Navbar";
import PassengerData from "./Components/PasssngerData";
const App = () => {
  const [passengers, setPassengers] = useState([]);

  // Fetch Data When App Loads
  useEffect(() => {
    fetchPassengers();

    
  }, []);

  const fetchPassengers = async () => {
    try {
      const response = await axios.get("https://holidayhub-13.onrender.com/passengers");
      setPassengers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Navbar/>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "40px",
          padding: "40px",
        }}
      >
        <PassengerForm setPassengers={setPassengers} />
        <PassengerData passengers={passengers} />
      </div>
    </div>
  );
};

export default App;
