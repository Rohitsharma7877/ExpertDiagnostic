import React from 'react'
import './companyabout.css'
import { RxDotFilled } from 'react-icons/rx'


const CompanyAbout = () => {
    return (
        <div className='about-main1'>
            <div className='about-main2'>
                
                <div className='about-box2'>
                    <h1>About Us!</h1>
                </div>
                <div className='about-box3'>
                {/* Meliora is a Latin adjective meaning "better". It may be used in the accusative and substantively */}
                </div>
                <div className='about-box4'>
                    <p>Doctors from over 35 disciplines practice at our facilities. We have a global presence through our large pool of teleconsultants. We bring healthcare at home for patients unable to visit our facilities. Our centres are equipped with a well-stocked pharmacy, state-of-the-art radiology & lab. We partner with corporates, institutions, sports federations, and social organisations to provide them with healthcare services.</p>
                </div>
                <div className='about-box5'>
                <div className='about-list' >
                                <ul>
                                    <li>
                                    <p><RxDotFilled /></p>
                                        <h1>MELIORA BRANDS</h1>
                                    </li>                                
                                    <li>
                                    <p><RxDotFilled /></p>
                                        <h1>MELIORA PRODUCTS </h1>
                                    </li>   
                                </ul>
                            </div>
                </div>
            </div>
        </div>
      )
}

export default CompanyAbout