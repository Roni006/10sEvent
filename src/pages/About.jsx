import React from "react";
import Container from "../Common/Container/Container";
import gruopIcon from "../../src/assets/img/group-icon.png";
import aboutBottom from "../../src/assets/img/about/about-bottom.png";

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
            <div>
                <div></div>
            </div>

            {/* bottom content  */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
