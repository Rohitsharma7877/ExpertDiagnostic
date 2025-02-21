import React, { useState, useEffect } from "react";
import "./UploadPrescriptionDashboard.css";

const UploadPrescriptionDashboard = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/prescriptions");
      const data = await response.json();
      if (response.ok) {
        setPrescriptions(data.data);
      } else {
        console.error("Failed to fetch prescriptions");
      }
    } catch (err) {
      console.error("Error fetching prescriptions:", err);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:4000/api/prescriptions/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchPrescriptions(); // Refresh the list
      } else {
        console.error("Failed to update status");
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  return (
    <div className="upload-prescription-dashboard">
      <h2>Upload Prescription Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Uploaded File</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((prescription, index) => (
            <tr key={prescription._id}>
              <td>{index + 1}</td>
              <td>{prescription.name}</td>
              <td>{prescription.mobile}</td>
              <td>
                <a
                  href={`http://localhost:4000/uploads/${prescription.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View File
                </a>
              </td>
              <td>
                <select
                  value={prescription.status}
                  onChange={(e) => handleStatusChange(prescription._id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="process">Process</option>
                  <option value="approved">Approved</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadPrescriptionDashboard;