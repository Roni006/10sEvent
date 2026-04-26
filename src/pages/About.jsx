import React from "react";
import Container from "../Common/Container/Container";
import gruopIcon from "../../src/assets/img/group-icon.png";
import aboutBottom from "../../src/assets/img/about/about-bottom.png";
import logo from "../../src/assets/img/about/about-logo.png";
import aboutBg from "../../src/assets/img/about/about-bg.png";
import { Link } from "react-router-dom";
import Achivement from "./Achivement";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <div>
            {/* top content  */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="sm:text-[54px] text-[30px]  font-semibold font-raleway sm:leading-17.5 leading-8.75 text-center w-70 sm:w-120 md:w-full text-[#000000] pb-4  ">
                About
                <span className="text-[#f16722]"> 10’s Event</span>
              </h1>
              <img src={aboutBottom} alt="icon image" />
            </div>

            {/* middle content  */}
            <div className="sm:mt-17 mt-12">
              <div className="lg:flex items-center gap-15">
                <img
                  className="mx-auto cursor-pointer"
                  src={logo}
                  alt="about logo"
                />
                <div>
                  <p className="font-raleway font-normal text-[18px] text-[#48301b] leading-6.5 lg:max-w-142.75 text-justify">
                    We are a professional team of loyal and professional event
                    coordinators who work together to serve our clients' every
                    need. From start to finish, we are dedicated to making sure
                    your event is a success. We offer a full range of services
                    including event planning, catering, protocol, and venue
                    selection. Our team members are experts in their fields so
                    you can rest assured that your events will be in good hands.
                  </p>

                  {/* buttons  */}
                  <div className="flex items-center md:justify-center sm:justify-center justify-center sm:gap-12 gap-5 sm:mt-15 mt-8">
                    <button className="sm:text-[18px] text-[16px] font-raleway font-bold leading-6.5 text-white sm:py-3.5 py-3 sm:px-8 px-4 bg-[#F16722] rounded-[30px]">
                      <Link>Contact Us</Link>
                    </button>
                    <button className="sm:text-[18px] text-[16px] font-raleway font-bold leading-6.5 text-white sm:py-3.5 py-2.75 sm:px-8 px-4 bg-[#F16722] hover:rounded-[30px] duration-300">
                      <Link>Learn More</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom content  */}
            <div className="my-17 hidden">
              <img className="rounded-md" src={aboutBg} alt="about bg" />
            </div>
          </div>
        </Container>
        {/* counter  */}
        {/* <Achivement className="hidden" /> */}
      </section>
    </>
  );
};

export default About;
