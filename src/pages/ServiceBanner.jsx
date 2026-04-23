import React from "react";
import serviceBanner from "../../src/assets/img/service/servciebanner.png";

const ServiceBanner = () => {
  return (
    <>
      <section className="-mt-20">
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
      </section>
    </>
  );
};

export default ServiceBanner;
