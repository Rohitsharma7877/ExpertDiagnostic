import React from "react";
import XRayHeader from "./XRayHeader";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import CallToAction from "./CallToAction";
import WhatisXRay from "./WhatisXRay";
import BenefitsXRay from "./BenefitsXRay";
import WhyshouldXRay from "./WhyshouldXRay";
import XrayExpectation from "./XrayExpectation";

const XRayHome = () => {
  return (
    <div>
      <XRayHeader />
      <WhatisXRay/>
      <BenefitsXRay/>
      <WhyshouldXRay/>
      <XrayExpectation/>
      {/* <FeaturesSection />
      <TestimonialsSection />
      <CallToAction /> */}
  
    </div>
  );
};

export default XRayHome;
