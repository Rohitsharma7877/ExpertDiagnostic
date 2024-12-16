import React from "react";
// import Carousel from "../Carousel";
// import Services from "../Services";
// import ExpertAdvised from "../ExpertAdvised.jsx";
// import GoodFact from "../GoodFact";
// import Test from "../Test";
// import Carousel2 from "../Carousel2";
// import Carousel3 from "../Carousel3.jsx";
import Header from "../Home/Header.jsx";
import DiagnosticService from "../Home/DiagnosticService.jsx";
import WhyChoose from "../Home/WhyChoose.jsx";

const HomePage = () => {
  return (
    <div>
      {/* <Carousel /> */}
      {/* <Carousel3/> */}
      <Header/>
      <DiagnosticService/>
      <WhyChoose/>
      {/* <Services /> */}
      {/* <ExpertAdvised /> */}
      {/* <GoodFact /> */}
      {/* <Test /> */}
      {/* <Carousel2 /> */}
    </div>
  );
};

export default HomePage;
