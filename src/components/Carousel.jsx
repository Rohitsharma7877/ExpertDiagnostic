import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'

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
                        <img src='https://medicality.health/images/our-work/Group-35.png' alt=''/>
                    </div>
                </div>
                <div className='carousel-image2'>
                    <div className='carousel-head'>
                        <h1>Peak Heart - Website <br/> Development</h1>
                       
                    </div>
                    <div className='carousel-pargh'>
                    <p> 
                        <br/>Branding is not just about creating an
                        <br/> exceptional logo but much more than that.
                        <br/> With our comprehensive digital marketing 
                        <br/>approach, we designed a tailored website for 
                        <br/> Peak Heart. By executing result-driven SEO
                        <br/> tactics, we elevated every aspect of the 
                        <br/> practices as well as patients and propelled 
                        <br/> them to become trusted
                        <br/> partners for being the 
                        <br/>best multispeciality hospital in USA.            
                        </p>
                        <br/><h2>View Peak Heart Website</h2>
                    </div>
                    <div className='carousel-img'>
                        <img src='https://medicality.health/images/our-work/Peakheart_macbook@2x.png' alt=''/>
                    </div>
                </div>
                <div className='carousel-image3'>
                <div className='carousel-photo2'>
                        <img src='https://medicality.health/images/our-work/peakheart-phone.png' alt=''/>
                    </div>
                </div>
            </div>
            </div>
            {/* second */}
            <div className='carousel-box-container'>
            <div className='carousel-box2'>
                 <div className='carousel-image1'>
                    <div className='carousel-photo1'>
                        <img src='https://thebrandbee.com/assets/imgs/work/vert-logo.png' alt=''/>
                    </div>
                </div>
                <div className='carousel-image2'>
                    <div className='carousel-head'>
                        <h1>Peak Heart - Website <br/> Development</h1>
                       
                    </div>
                    <div className='carousel-pargh'>
                    <p> 
                        <br/>Branding is not just about creating an
                        <br/> exceptional logo but much more than that.
                        <br/> With our comprehensive digital marketing 
                        <br/>approach, we designed a tailored website for 
                        <br/> Peak Heart. By executing result-driven SEO
                        <br/> tactics, we elevated every aspect of the 
                        <br/> practices as well as patients and propelled 
                        <br/> them to become trusted
                        <br/> partners for being the 
                        <br/>best multispeciality hospital in USA.            
                        </p>
                        <br/><h2>View Peak Heart Website</h2>
                    </div>
                    <div className='carousel-img'>
                        <img src='https://medicality.health/images/our-work/Peakheart_macbook@2x.png' alt=''/>
                    </div>
                </div>
                <div className='carousel-image3'>
                <div className='carousel-photo2'>
                        <img src='https://thebrandbee.com/assets/imgs/work/vert-phone.png' alt=''/>
                    </div>
                </div>
            </div>
            </div>
            {/* third */}
            <div className='carousel-box-container'>
            <div className='carousel-box3'>
                 <div className='carousel-image1'>
                    <div className='carousel-photo1'>
                        <img src='https://thebrandbee.com/assets/imgs/work/Athena-Logo.png' alt=''/>
                    </div>
                </div>
                <div className='carousel-image2'>
                    <div className='carousel-head'>
                        <h1>Peak Heart - Website <br/> Development</h1>
                       
                    </div>
                    <div className='carousel-pargh'>
                    <p> 
                        <br/>Branding is not just about creating an
                        <br/> exceptional logo but much more than that.
                        <br/> With our comprehensive digital marketing 
                        <br/>approach, we designed a tailored website for 
                        <br/> Peak Heart. By executing result-driven SEO
                        <br/> tactics, we elevated every aspect of the 
                        <br/> practices as well as patients and propelled 
                        <br/> them to become trusted
                        <br/> partners for being the 
                        <br/>best multispeciality hospital in USA.            
                        </p>
                        <br/><h2>View Peak Heart Website</h2>
                    </div>
                    <div className='carousel-img'>
                        <img src='https://medicality.health/images/our-work/Peakheart_macbook@2x.png' alt=''/>
                    </div>
                </div>
                <div className='carousel-image3'>
                <div className='carousel-photo2'>
                        <img src='https://thebrandbee.com/assets/imgs/work/Athena-phone-copy.png' alt=''/>
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