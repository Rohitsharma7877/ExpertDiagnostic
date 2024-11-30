import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { TiStar } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import logo from "../assests/logo2.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-photo">
        {/* <img src='https://thebrandbee.com/assets/imgs/home/DJB.webp' alt='' /> */}

        <div className="footer-main">
          <div className="footer-main1">
            <d iv className="footer-mainA">
              <div className="footer-mainB">
                <div className="footer-mainC1">
                  <div className="footer-mainC1A">
                    <div className="footer-mainC1A1">
                      <div className="footer-mainC1A1-logo">
                        <img
                          src={logo}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="footer-mainC1A2">
                      <div className="footer-mainC1A2-para">
                        <p>
                        An expert diagnostician possesses in-depth 
                        knowledge and experience in identifying 
                        complex issues. They utilize advanced tools 
                        and techniques to analyze problems accurately 
                        and efficiently. Their expertise ensures quick 
                        resolutions and reliable solutions across various fields.
                        </p>
                      </div>
                    </div>
                    <div className="footer-mainC1A3">
                      <div className="footer-mainC1A3-social">
                        <div className="footer-mainC1A3-social1">
                          <div className="footer-mainC1A3-social-fb">
                            <FaFacebookF />
                          </div>
                        </div>
                        <div className="footer-mainC1A3-social1">
                          <div className="footer-mainC1A3-social-fb">
                            <GrInstagram />
                          </div>
                        </div>
                        <div className="footer-mainC1A3-social1">
                          <div className="footer-mainC1A3-social-fb">
                            <FaLinkedin />
                          </div>
                        </div>
                        <div className="footer-mainC1A3-social1">
                          <div className="footer-mainC1A3-social-fb">
                            <SiYoutube />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="footer-mainC1A4"> */}
                      {/* <div className="footer-mainC1A4-photo"> */}
                        {/* <div className="footer-mainC1A4-photo-google">
                          <img
                            src="https://thebrandbee.com/assets/imgs/goo-part.webp"
                            alt=""
                          />
                        </div> */}
                        {/* <div className="footer-mainC1A4-photo-meta">
                          <img
                            src="https://thebrandbee.com/assets/imgs/meta.webp"
                            alt=""
                          />
                        </div> */}
                      {/* </div> */}
                    {/* </div> */}
                  </div>
                  <div className="footer-mainC1B">
                    <div className="footer-mainC1B1">
                      <div className="footer-mainC1B1-info">
                        <h1>Information</h1>
                        <br />
                        <p>Sample Work</p>
                        <p>Our Clients</p>
                        <p>Industries We Serve</p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Contact</p>
                      </div>
                    </div>
                  </div>
                  <div className="footer-mainC1C">
                    <div className="footer-mainC1C1">
                      <div className="footer-mainC1C1-contact">
                        <h1>Contact Us</h1>
                        <br />
                        <br />
                        <p>
                        ExpertDiagnostics Pvt.
                        Ltd., R.T Nagar Police Station, Bangalore, Karnataka
                        </p>
                        <br />
                        <br />
                        <h2 className="mobile-no">+91-123456789</h2>
                        <br />
                        <p>Email:- ExpertDiagnostics@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-mainC2">
                  <div className="footer-mainC2A">
                    <div className="footer-mainC2A1">
                      <div className="footer-mainC2A1-G1">
                        <div className="footer-mainC2A1-G-image">
                          <FcGoogle />
                        </div>
                        <div className="footer-mainC2A1-G-heading">
                          <h1>
                            {" "}
                            India's leading Diagnostics <span> |</span>{" "}
                          </h1>
                        </div>
                      </div>
                      <div className="footer-mainC2A1-G2">
                        <div className="footer-mainC2A1-G2-star">
                          {/* <h1 className="footer-mainC2A1-G2-starr">
                            {" "}
                            30+ 
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <TiStar />
                            <TiStar />
                          </h1> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-mainC3">
                  <div className="footer-mainC3A">
                    <div className="footer-mainC3A1">
                    <hr/>
                      <div className="footer-mainC3A1-right">
                        <p>
                        Copyright © 2023-2024 | All rights reserved, ExpertDiagnostics.com.
                        </p>
                      </div>
                    </div>
                    {/* <div className="footer-mainC3A2">
                      <div className="footer-mainC3A2-telegarm">
                          <div className="footer-mainC3A2-telegarm-write">
                              <h1>Subscribe to our Newsletter</h1>
                        </div>
                        <div className="footer-mainC3A2-telegarm-logo">
                          <FaTelegramPlane />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </d>
            <div className="footer-mainA1">
              <div className="footer-mainB1">
                <div className="footer-mainB1A">
                  <h1>
                    Do you want to <br />
                    Bee?
                  </h1>
                </div>
                <div className="footer-mainB1B">
                  <div className="footer-mainB1B-banner-btn">
                    <button className="footer-mainB1B-banner-btn2">
                      Contact Us{" "}
                      <span>
                        <MdArrowOutward />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="footer-mainB1C">
                  <div className="footer-mainB1C-time">
                    <h1>09:00 AM - 7:00PM</h1>
                  </div>
                  <div className="footer-mainB1C-day">
                    <h1>Monday-Friday</h1>
                  </div>
                </div>
                <div className="footer-mainB1D">
                  <div className="footer-mainB1D-pragh">
                    <p>
                      With extensive expertise spanning <br />
                      Delhi, Noida, Mumbai, Dubai, <br />
                      Kolkata, Chennai, Bangalore, <br />
                      Hyderabad, and the USA, our digital <br />
                      marketing agency brings invaluable <br />
                      industry insights and international <br />
                      know-how to your brand's success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-main2">
            <div className="footer-main2A">
              {/* <h1>Top Searched Keywords: -</h1> */}
            </div>
            <div className="footer-main2A-list">
              {/* <p>
                Influencer Marketing | Content Development Services | Facebook
                Advertising Service | Google Advertising Service | Lead
                Generation Service | Linkedin Advertising Service | Online
                Reputation Management | Photoshoots Video Shoots | Social Media
                Advertising Service | Twitter Advertising Service | Videos
                Marketing Service | Youtube Advertising Service | Facebook
                Marketing Service | Linkedin Marketing Service | Twitter
                Marketing Service | Youtube Marketing Service
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
