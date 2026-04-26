import React from "react";
import Container from "../Common/Container/Container";
import BannerBg from "../../src/assets/img/banner.png";

const Banner = () => {
  return (
    <>
      <section className="xl:-mt-10 lg:mt-0 md:mt-0 sm:mt-0 mt-0 ">
        <div className="relative">
          <img className="w-full h-auto" src={BannerBg} alt="banner bg" />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-[#f16722] lg:max-w-212.5 md:max-w-137.5 sm:max-w-112.5 max-w-87.5 lg:text-[76px] md:text-[60px] 
            sm:text-[54px] text-[25px] lg:leading-25 md:leading-16.25 sm:leading-15 leading-8 font-semibold font-raleway text-center"
            >
              We are 10’s EVENT
              <span className="text-white"> We bring your</span> dream event
              <span className="text-white"> to life!</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
