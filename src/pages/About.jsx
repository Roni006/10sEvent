import React from "react";
import Container from "../Common/Container/Container";
import gruopIcon from "../../src/assets/img/group-icon.png";
import aboutBottom from "../../src/assets/img/about/about-bottom.png";
import logo from "../../src/assets/img/about/about-logo.png";
import aboutBg from '../../src/assets/img/about/about-bg.png'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <div>
            {/* top content  */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[54px] font-semibold font-raleway leading-17.5 text-[#000000] pb-2 ">
                About
                <span className="text-[#f16722]">10’s Event</span>
              </h1>
              <img src={aboutBottom} alt="icon image" />
            </div>

            {/* middle content  */}
            <div className="mt-17">
              <div className="flex items-center gap-15">
                <img className="cursor-pointer" src={logo} alt="about logo" />
                <div>
                  <p className="font-raleway font-normal text-[18px] text-[#48301b] leading-6.5 max-w-142.75 text-justify">
                    We are a professional team of loyal and professional event
                    coordinators who work together to serve our clients' every
                    need. From start to finish, we are dedicated to making sure
                    your event is a success. We offer a full range of services
                    including event planning, catering, protocol, and venue
                    selection. Our team members are experts in their fields so
                    you can rest assured that your events will be in good hands.
                  </p>

                  {/* buttons  */}
                  <div className="flex items-center gap-12 mt-15">
                    <button className="text-[18px] font-raleway font-bold leading-6.5 text-white py-3.5 px-8 bg-[#F16722] rounded-[30px]">
                      <Link>Contact Us</Link>
                    </button>
                    <button className="text-[18px] font-raleway font-bold leading-6.5 text-white py-3.5 px-8 bg-[#F16722] hover:rounded-[30px] duration-300">
                      <Link>Learn More</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom content  */}
            <div className="mt-17">
              <img className="rounded-md" src={aboutBg} alt="about bg" />
            </div>
          </div>
        </Container>
        <div>
            
        </div>
      </section>
    </>
  );
};

export default About;
