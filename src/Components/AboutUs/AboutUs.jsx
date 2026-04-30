import React from "react";
import AboutBanner from "../../pages/AboutBanner";
import CallToAction from "../../pages/CallToAction"; 
import Achivement from "../../pages/Achivement";
import AboutFrame from "../../pages/AboutFrame";
import About10sGroup from "../../pages/About10sGroup";

const AboutUs = () => {
  return (
    <>
      {/* <AboutBanner /> */}
      <AboutFrame/>
      <Achivement/>
      <About10sGroup/>
      {/* <CallToAction/> */}
    </>
  );
};

export default AboutUs;
