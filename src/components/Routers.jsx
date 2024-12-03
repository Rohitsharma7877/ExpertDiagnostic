import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Do not import BrowserRouter
// import Home from './Home';  
import About from './About';
// import Facilities from './Facilities';
// import HealthPackage from './HealthPackage';
import DownloadReport from './DownloadReport';
import HomePage from './pages/HomePage';
import PatientPortal from './PatientPortal';
// import LabRadiology from './LabRadiology';
import DoctorAppointment from './DoctorAppointment';
import ContactUs from './ContactUs';
// import UltraSonography from './UltraSonography';
import UltraSoundPage from './UltraSoundPage';
import Electrocardiogram from './Electrocardiogram';
import ECGPage from './pages/ECGPage';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patient-portal" element={<PatientPortal />} />
      <Route path="/doctor-portal" element={<DoctorAppointment />} />
      {/* <Route path="/lab-radiology" element={<LabRadiology />} /> */}
      <Route path="/about" element={<About />} />
      <Route path="/facilities/ultra-sonography" element={<UltraSoundPage />} />
      <Route path="/facilities/ecg" element={<ECGPage />} />
      {/* <Route path="/health-package" element={<HealthPackage />} /> */}
      <Route path="/download-report" element={<DownloadReport />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default Routers;
