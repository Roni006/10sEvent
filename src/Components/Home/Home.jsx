import React from "react";
import Services from "../../pages/Services";
import About from "../../pages/About";
import CallToAction from "../../pages/CallToAction";
import Testimonial from "../../pages/Testimonial";
import Banner from "../../pages/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <CallToAction />
      <Testimonial/>
    </>
  );
};

export default Home;
