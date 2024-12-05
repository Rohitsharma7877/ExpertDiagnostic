import React from "react";
import "./team.css";

const team = [
  {
    id: 1,
    imageUrl:
      "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
    name: "Dr. Vijay",
    designation: "Radiology Department",
  },
  {
    id: 2,
    imageUrl:
      "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
    name: "Dr. Mithoon",
    designation: "Radiology Department",
  },
  {
    id: 3,
    imageUrl:
      "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
    name: "Dr. Prateeksha",
    designation: "Radiology Department",
  },
  {
    id: 4,
    imageUrl:
      "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
    name: "Dr. Priyanka",
    designation: "Radiology Department",
  },
  {
    id: 5,
    imageUrl:
      "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
    name: "Dr. Preety",
    designation: "Radiology Department",
  },
];

const Team = () => {
  return (
    <div className="main-container">
      <h1 className="team-texxt">Team</h1>
      <div className="team-container1">
        <div className="team-grid">
          {team.map((item) => (
            <div key={item.id} className="team-card">
              <img
                src={item.imageUrl}
                alt={item.items}
                className="team-image"
              />
              <h2 className="team-title">
                <span>{item.name}</span>
              </h2>
              <h2 className="team-title" style={{ color: "#eb7801" }}>
                <span>{item.designation}</span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
