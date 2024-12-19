import React from "react";
import { Routes, Route } from "react-router-dom";
// import About from "./About";
import DownloadReport from "./DownloadReport";
import HomePage from "./pages/HomePage";
import ContactUs from "./ContactUs";
import ECGPage from "./pages/ECGPage";
import DoctorPortal from "./DoctorPortal/DoctorPortal";
import BoneDensityPage from "./pages/BoneDensityPage";
import MammographyPage from "./pages/MammographyPage";
import TMTPage from "./pages/TMTPage";
import XRAYPage from "./pages/XRAYPage";
import CTScanPage from "./pages/CTScanPage";
import MRIPage from "./pages/MRIPage";
import UTSoundPage from "./pages/UTSoundPage";
import Mammography2Page from "./pages/Mammography2Page";
import EEGPage from "./pages/EEGPage";
import PulmonaryFunctionTestPage from "./pages/PulmonaryFunctionTestPage";
import UploadPrescription from "./UploadPrescription";
import AboutPage from "./pages/AboutPage";
// import About from "./AboutSection/About";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/patient-portal" element={<PatientPortal />} /> */}
      <Route path="/doctor-portal" element={<DoctorPortal />} />

      <Route path="/upload-prescription" element={<UploadPrescription />} />

      

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
      <Route path="/special-test/bone-density-test" element={<BoneDensityPage />} />
      <Route path="/special-test/eeg" element={<EEGPage />} />
      <Route path="/special-test/pulmonary-function-test" element={<PulmonaryFunctionTestPage />} />

      {/* Expert-Care-Package Routes  */}
      




      <Route path="/about" element={<AboutPage />} />
      <Route path="/download-report" element={<DownloadReport />} />
      <Route path="/contact-us" element={<ContactUs />} />


    </Routes>
  );
};

export default Routers;
