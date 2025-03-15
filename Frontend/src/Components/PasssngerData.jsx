import React, { useState } from "react";
import jsPDF from "jspdf";

const PassengerData = ({ passengers }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Filter passengers by name only
  const filteredPassengers = passengers.filter((passenger) =>
    passenger.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const generatePDF = (passenger) => {
    const doc = new jsPDF();
    doc.text("Passenger Details", 20, 20);
    doc.text(`Name: ${passenger.name}`, 20, 30);
    doc.text(`Age: ${passenger.age}`, 20, 40);
    doc.text(`Gender: ${passenger.gender}`, 20, 50);
    doc.text(`Contact: ${passenger.contact}`, 20, 60);
    doc.text(`Email: ${passenger.email}`, 20, 70);
    doc.save(`${passenger.name}_details.pdf`);
  };

  return (
    <div className="container" style={{ width: "85%" }}>
      <h3 className="text-center mb-4">Passenger Data</h3>

      {/* ✅ Search Input */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="table-responsive shadow-lg rounded">
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Photo</th>
              <th>ID Card</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPassengers.length > 0 ? (
              filteredPassengers.map((passenger) => (
                <tr key={passenger._id}>
                  <td>{passenger.name}</td>
                  <td>{passenger.age}</td>
                  <td>{passenger.gender}</td>
                  <td>{passenger.contact}</td>
                  <td>{passenger.email}</td>
                  <td>
                    {passenger.photo ? (
                      <a href={passenger.photo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                        View Photo
                      </a>
                    ) : (
                      "No Photo"
                    )}
                  </td>
                  <td>
                    {passenger.idCard ? (
                      <a href={passenger.idCard} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-success">
                        View ID Card
                      </a>
                    ) : (
                      "No ID Card"
                    )}
                  </td>
                  <td>
                    <button className="btn btn-sm btn-info" onClick={() => generatePDF(passenger)}>
                      Generate PDF
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">No Matching Passengers Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PassengerData;
