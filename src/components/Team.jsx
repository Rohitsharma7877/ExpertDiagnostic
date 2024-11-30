import React from 'react'
import './team.css';


const team = [
    {
      id: 1,
      imageUrl: "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
      name: "Appointment",
      designation: 'aaa',
    },
    {
      id: 2,
      imageUrl: "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
      name: "Lab Tests",
      designation:'aaaa',
      
    },
    {
      id: 3,
      imageUrl: "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
      name: "Radiology",
      designation:'aaaa'
    },
    {
      id: 4,
      imageUrl: "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
      name: "X-Ray",
      designation: 'aaaa',
    },
    {
      id: 5,
      imageUrl: "https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg",
      name: "X-Ray",
      designation: 'aaaa',
    }
  ];

const Team = () => {
    return (
        <div className='main-container'>
        <h1 className='team-texxt'>Team</h1>
            <div className="team-container1">
            <div className="team-grid">
                {team.map((item) => (
                <div key={item.id} className="team-card">
                    <img src={item.imageUrl} alt={item.items} className="team-image" />
                    <h2 className="team-title"><span>{item.name}</span></h2>
                    <h2 className="team-title"><span>{item.designation}</span></h2>
                </div>
                ))}
            </div>
        </div>
        </div>
        
      );
}

export default Team