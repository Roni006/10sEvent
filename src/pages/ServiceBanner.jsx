import React from "react";
import serviceBanner from "../../src/assets/img/service/servciebanner.png";

const ServiceBanner = () => {
  return (
    <>
      <section className="xl:-mt-20 lg:-mt-25 md:-mt-26 sm:mt-0 mt-0 ">
        <div className="relative">
          <img className="w-full h-auto" src={serviceBanner} alt="banner bg" />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="md:pt-15 text-[#f16722] lg:max-w-212.5 md:max-w-137.5 sm:max-w-112.5 max-w-87.5 lg:text-[76px] md:text-[50px] 
            sm:text-[54px] text-[25px] lg:leading-25 md:leading-16.25 sm:leading-15 leading-8 font-semibold font-raleway text-center"
            >
              10’s EVENT
              <span className="text-white"> We provide the following</span>{" "}
              Services
            </h1>
          </div>
        </div>
      </section>

      {/* <section className="-mt-20">
        <div className="relative">
          <img className="w-full h-auto" src={serviceBanner} alt="banner bg" />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[#f16722] max-w-200 text-[76px] leading-25 font-medium font-raleway text-center">
              10’s EVENT
              <span className="text-white"> We provide the following </span>
              Services
            </h1>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ServiceBanner;
