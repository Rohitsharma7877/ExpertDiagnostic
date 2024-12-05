import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import DownloadReport from "./DownloadReport";
import HomePage from "./pages/HomePage";
import PatientPortal from "./PatientPortal";
import ContactUs from "./ContactUs";
import ECGPage from "./pages/ECGPage";
import UltraSoundPage from "./pages/UltraSoundPage";
import DoctorPortal from "./DoctorPortal";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/patient-portal" element={<PatientPortal />} />
      <Route path="/doctor-portal" element={<DoctorPortal />} />
      <Route path="/about" element={<About />} />
      <Route path="/facilities/ultra-sonography" element={<UltraSoundPage />} />
      <Route path="/facilities/ecg" element={<ECGPage />} />
      <Route path="/download-report" element={<DownloadReport />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default Routers;
