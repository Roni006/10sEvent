import React from "react";

import workBg from "../../src/assets/img/our-work/work-bg.png";

const WorkBanner = () => {
  return (
    <>
      <section className="-mt-20">
        <div className="relative">
          <img className="w-full h-auto" src={workBg} alt="banner bg" />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-[#f16722] text-[76px] leading-25 font-medium font-raleway text-center">
              10’s EVENT
            </h1>
            <span className="text-[76px] leading-25 font-medium font-raleway text-center text-white">
              Check out our recent
            </span>
            <span className="text-[76px] leading-25 font-medium font-raleway text-center text-[#f16722]">
              Work
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkBanner;
