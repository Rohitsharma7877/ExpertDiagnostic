import React from "react";
import Carousel from "../Carousel";
import Services from "../Services";
import ExpertAdvised from "../ExpertAdvised";
import GoodFact from "../GoodFact";
import Test from "../Test";
import Carousel2 from "../Carousel2";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <Services />
      <ExpertAdvised />
      <GoodFact />
      <Test />
      <Carousel2 />
    </div>
  );
};

export default HomePage;
