import React from "react";
import Container from "../Common/Container/Container";
import ContactUsBg from '../../src/assets/img/contact-us.png'

const Contactus = () => {
  return (
    <>
      <section className="-mt-20">
        <div className="relative">
          <img className="w-full h-auto" src={ContactUsBg} alt="banner bg" />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-[#f16722] text-[76px] leading-25 font-medium font-raleway text-center">
              10’s EVENT
            </h1>
            <span className="text-[76px] leading-25 font-medium font-raleway text-center text-white">
              Let's Plan The Perfect Event
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

export default Contactus;
