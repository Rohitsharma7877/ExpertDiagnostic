import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import DownloadReport from "./DownloadReport";
import HomePage from "./pages/HomePage";
import ContactUs from "./ContactUs";
import ECGPage from "./pages/ECGPage";
import UltraSoundPage from "./pages/UltraSoundPage";
import DoctorPortal from "./DoctorPortal/DoctorPortal";
import BoneDensityPage from "./pages/BoneDensityPage";
import MammographyPage from "./pages/MammographyPage";
import TMTPage from "./pages/TMTPage";
import XRAYPage from "./pages/XRAYPage";
import CTScanPage from "./pages/CTScanPage";
import MRIPage from "./pages/MRIPage";
import UTSoundPage from "./pages/UTSoundPage";
import Mammography2Page from "./pages/Mammography2Page";
// import PatientPortal from "./PatientPortal/PatientPortal";
// import UltrasonographyPage from "./pages/UltrasonographyPage";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/patient-portal" element={<PatientPortal />} /> */}
      <Route path="/doctor-portal" element={<DoctorPortal />} />

      {/* Radiology-test Routes  */}
      <Route path="/radiology-test/mri" element={<MRIPage />} />
      <Route path="/radiology-test/ct-scan" element={<CTScanPage />} />
      <Route path="/radiology-test/x-ray" element={<XRAYPage />} />
      <Route path="/radiology-test/ultrasonography" element={<UTSoundPage />} />

      {/* special-test Routes  */}
      <Route path="/special-test/tmt" element={<TMTPage />} />
      <Route path="/special-test/mri-mammography" element={<MammographyPage />} />
      <Route path="/special-test/mammography" element={<Mammography2Page />} />
      <Route path="/special-test/ecg" element={<ECGPage />} />
      <Route path="/special-test/bone-density-test" element={<MammographyPage />} />
      <Route path="/special-test/eeg" element={<MammographyPage />} />
      <Route path="/special-test/pulmonary-function-test" element={<MammographyPage />} />




      <Route path="/about" element={<About />} />
      <Route path="/facilities/ultra-sonography" element={<UltraSoundPage />} />
      <Route path="/facilities/ecg" element={<ECGPage />} />
      <Route
        path="/facilities/bone-density-test"
        element={<BoneDensityPage />}
      />
      <Route path="/download-report" element={<DownloadReport />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
};

export default Routers;
