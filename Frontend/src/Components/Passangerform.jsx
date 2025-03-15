import React, { useState } from "react";
import axios from "axios";

const PassengerForm = ({ setPassengers }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Female",
    contact: "",
    email: "",
    photo: null,
    idCard: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => formDataToSend.append(key, formData[key]));

    try {
      const response = await axios.post("https://holidayhub-13.onrender.com/passengers", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setPassengers((prevPassengers) => [...prevPassengers, response.data]); // ✅ Update UI immediately

      setFormData({
        name: "",
        age: "",
        gender: "Female",
        contact: "",
        email: "",
        photo: null,
        idCard: null,
      });

      alert("Passenger added successfully!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="card shadow-lg p-4 bg-light rounded" style={{ width: "400px" }}>
      <h4 className="text-center mb-3">Add Passenger</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" className="form-control mb-2" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="age" className="form-control mb-2" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <select name="gender" className="form-control mb-2" value={formData.gender} onChange={handleChange}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
        <input type="tel" name="contact" className="form-control mb-2" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
        <input type="email" name="email" className="form-control mb-2" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <label className="small text-muted">Upload Photo</label>
        <input type="file" name="photo" className="form-control mb-2" onChange={handleFileChange} required />
        <label className="small text-muted">Upload ID Card</label>
        <input type="file" name="idCard" className="form-control mb-3" onChange={handleFileChange} required />
        <button type="submit" className="btn btn-dark w-100">Submit</button>
      </form>
    </div>
  );
};

export default PassengerForm;
