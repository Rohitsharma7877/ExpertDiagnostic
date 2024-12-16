import React from 'react'
// import Electrocardiogram from '../ECG/Electrocardiogram'
// import WhatElectrocardiogram from '../ECG/WhatElectrocardiogram'
// import WhatDoesECG from '../ECG/WhatDoesECG'
// import HowtoprepareECG from '../ECG/HowtoprepareECG'
import ECGHome from '../ECG/ECGHome'
import WhatisECG from '../ECG/WhatisECG'
import BenefitsECG from '../ECG/BenefitsECG'
import WhyshouldECG from '../ECG/WhyshouldECG'
import ECGExpectation from '../ECG/ECGExpectation'

const ECGPage = () => {
  return (
    <>
        {/* <Electrocardiogram/>
        <WhatElectrocardiogram/>
        <WhatDoesECG/>
        <HowtoprepareECG/> */}
        <ECGHome/>
        <WhatisECG/>
        <BenefitsECG/>
        <WhyshouldECG/>
        <ECGExpectation/>
        
    </>
  )
}

export default ECGPage