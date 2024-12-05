import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'
import heart from './assests/ecgIconsss.png'
import ecgGraph from './assests/ecggraphImage.png'
import ecggraphh from './assests/ecglove.png'
import ultraIcons from './assests/ultraSoundPreparee.png'
import ultraSecond from './assests/ultrasoundSecondImage.png'
import ultraSoundThird from './assests/ultrasonographyDoctor.png'
import xRay from './assests/x-rayIcons.png'
import xraysecond from './assests/xRayImage2.png'
import xrayThird from './assests/xraythirdd.png'



export default class Carousel extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,  // Set autoplay to true
        autoplaySpeed: 3000,  // Adjust autoplay speed in milliseconds
        arrows: false,  
      };


  return (
    
    <div className='carousel-main1'>
    <Slider {...settings}>
        {/* <div className='carousel-main2'> */}
         
            {/* first */}
            <div className='carousel-box-container'>
            <div className='carousel-box1'>
                 <div className='carousel-image1'>
                    <div className='carousel-photo1'>
                        <img src={heart} alt=''/>
                    </div>
                </div>
                <div className='carousel-image2'>
                    <div className='carousel-head'>
                        <h1>ECG OR EKG (Electrocardiogram)</h1>
                      
                    </div>
                    <div className='carousel-pargh'>
                    <p> 
                    The heart generates electrical impulses that trigger contractions, measurable via a painless Electrocardiogram (ECG). This non-invasive test reveals the heart's electrical activity, helping detect irregularities or conditions. ECG is crucial for diagnosing and monitoring cardiac health, offering valuable insights into overall function.      
                        </p>
                        {/* <br/><h2>View Peak Heart Website</h2> */}
                    </div>
                    <div className='carousel-img'>
                        <img src={ecgGraph} alt=''/>
                    </div>
                </div>
                <div className='carousel-image3'>
                <div className='carousel-photo2'>
                        <img src={ecggraphh} alt=''/>
                    </div>
                </div>
            </div>
            </div>
            {/* second */}
            <div className='carousel-box-container'>
            <div className='carousel-box2'>
                 <div className='carousel-image1'>
                    <div className='carousel-photo1'>
                        <img src={ultraIcons} alt=''/>
                    </div>
                </div>
                <div className='carousel-image2'>
                    <div className='carousel-head'>
                        <h1>Ultrasonography - Ultrasound</h1>
                       
                    </div>
                    <div className='carousel-pargh'>
                    <p> 
                    Ultrasonography is a safe, non-invasive imaging method that uses sound waves to create detailed internal body images. A transducer and ultrasound gel emit high-frequency sound waves, which reflect off tissues and organs. These reflections are converted into real-time images by a computer. Unlike X-rays, ultrasound involves no radiation, ensuring safer diagnostics.       
                        </p>
                        {/* <br/><h2>View Peak Heart Website</h2> */}
                    </div>
                    <div className='carousel-img'>
                        <img src={ultraSecond} alt=''/>
                    </div>
                </div>
                <div className='carousel-image3'>
                <div className='carousel-photo2'>
                        <img src={ultraSoundThird} alt=''/>
                    </div>
                </div>
            </div>
            </div>
            {/* third */}
            <div className='carousel-box-container'>
            <div className='carousel-box3'>
                 <div className='carousel-image1'>
                    <div className='carousel-photo1'>
                        <img src={xRay} alt=''/>
                    </div>
                </div>
                <div className='carousel-image2'>
                    <div className='carousel-head'>
                        <h1>CT- Scan</h1>
                       
                    </div>
                    <div className='carousel-pargh'>
                    <p> 
                    This 16-slice CT machine delivers high-speed, 3D imaging with low-dose radiation, diagnosing conditions like aortic aneurysms, stenosis, and kidney stones. Non-invasive and versatile, it aids cardiologists, vascular surgeons, and urologists. It’s also used for neurological, abdominal, and thoracic evaluations. 
                        </p>
                        {/* <br/><h2>View Peak Heart Website</h2> */}
                    </div>
                    <div className='carousel-img'>
                        <img src={xraysecond} alt=''/>
                    </div>
                </div>
                <div className='carousel-image3'>
                <div className='carousel-photo2'>
                        <img src={xrayThird} alt=''/>
                    </div>
                </div>
            </div>
            </div>
                  
        {/* </div> */}
        </Slider>
    </div>
    
  )
}
}