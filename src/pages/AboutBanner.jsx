import React from "react";

import aboutBg from "../../src/assets/img/aboutus/about-bg.png";

const AboutBanner = () => {
  return (
    <>
      <section className="-mt-20">
        <div className="relative">
          <img className="w-full h-auto" src={aboutBg} alt="banner bg" />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[76px] leading-25 font-medium font-raleway text-center text-[#f16722]">
              About 10's EVENT
            </span>
            <span className="text-[76px] leading-25 font-medium font-raleway text-center text-white">
              Who we are, What we do
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
