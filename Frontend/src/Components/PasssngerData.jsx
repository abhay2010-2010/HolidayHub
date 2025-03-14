import React, { useEffect, useState } from "react";
import axios from "axios";

const PassengerData = () => {
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/passengers")
      .then((response) => setPassengers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Passenger Data</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Photo</th>
              <th>ID Card</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger, index) => (
              <tr key={index}>
                <td>{passenger.name}</td>
                <td>{passenger.age}</td>
                <td>{passenger.gender}</td>
                <td>{passenger.contact}</td>
                <td>{passenger.email}</td>
                <td>
                  <a href={`http://localhost:5000/${passenger.photo}`} download className="btn btn-sm btn-primary">
                    Download
                  </a>
                </td>
                <td>
                  <a href={`http://localhost:5000/${passenger.idCard}`} download className="btn btn-sm btn-success">
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassengerData;
