import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
import radio from "./assests/radiologyiconss.png";
import radioGraph from "./assests/radiology.jpg";
import radiographh from "./assests/radiologyImage.jpg";
import pathIcons from "./assests/pathologyIconsss.png";
import Pathologysecond from "./assests/Pathologysecond.jpg";
import PathologyThird from "./assests/PathologyDepartment.jpg";
import doctorExp from "./assests/doctorExpertIcons.png";
// import xraysecond from "./assests/xRayImage2.png";
import doctorEx from "./assests/doctorExportgroup.jpg";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Set autoplay to true
      autoplaySpeed: 5000, // Adjust autoplay speed in milliseconds
      arrows: false,
    };

    return (
      <div className="carousel-main1">
        <Slider {...settings}>
          {/* <div className='carousel-main2'> */}

          {/* first */}
          <div className="carousel-box-container">
            <div className="carousel-box1">
              <div className="carousel-image1">
                <div className="carousel-photo1">
                  <img src={radio} alt="" />
                </div>
              </div>
              <div className="carousel-image2">
                <div className="carousel-head">
                  <h1>Radiology Department</h1>
                </div>
                <div className="carousel-pargh">
                  <p>
                  The Radiology Department is vital in healthcare, offering advanced imaging services like MRI, CT scans, and X-rays for accurate diagnosis and effective treatment planning. It supports early disease detection and precise patient management.
                  </p>
                  {/* <br/><h2>View Peak Heart Website</h2> */}
                </div>
                <div className="carousel-img">
                  <img src={radioGraph} alt="" />
                </div>
              </div>
              <div className="carousel-image3">
                <div className="carousel-photo2">
                  <img src={radiographh} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="carousel-box-container">
            <div className="carousel-box2">
              <div className="carousel-image1">
                <div className="carousel-photo1">
                  <img src={pathIcons} alt="" />
                </div>
              </div>
              <div className="carousel-image2">
                <div className="carousel-head">
                  <h1>Pathology Department</h1>
                </div>
                <div className="carousel-pargh">
                  <p>
                    The Pathology Department is essential in diagnosing diseases
                    through the analysis of body fluids, tissues, and cells. By
                    utilizing advanced laboratory techniques, it helps in
                    identifying conditions early and monitoring treatment
                    progress. Its services are vital for accurate diagnosis and
                    effective patient care.
                  </p>
                  {/* <br/><h2>View Peak Heart Website</h2> */}
                </div>
                <div className="carousel-img">
                  <img src={Pathologysecond} alt="" />
                </div>
              </div>
              <div className="carousel-image3">
                <div className="carousel-photo2">
                  <img src={PathologyThird} alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="carousel-box-container">
            <div className="carousel-box3">
              <div className="carousel-image1">
                <div className="carousel-photo1">
                  <img src={doctorExp} alt="" />
                </div>
              </div>
              <div className="carousel-image2">
                <div className="carousel-head">
                  <h1>Why - Expert</h1>
                </div>
                <div className="carousel-pargh3">
                  <p>
                  "The Radiology center in Hassan is equipped with state-of-the-art radiology equipment that meets international standards."
                  </p>
                  {/* <br/><h2>View Peak Heart Website</h2> */}
                </div>
                <div className="carousel-pargh3">
                  <p>
                  "Our experienced Radiology and Pathology teams provide accurate results to support better diagnosis, enabling the right course of treatment."
                  </p>
                </div>
              </div>
              <div className="carousel-image3">
                <div className="carousel-photo2">
                  <img src={doctorEx} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* </div> */}
        </Slider>
      </div>
    );
  }
}
