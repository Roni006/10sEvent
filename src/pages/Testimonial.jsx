import React from "react";
import Container from "../Common/Container/Container";
import testBg from "../../src/assets/img/test-img/testimonial-bg.png";
import avatar from "../../src/assets/img/test-img/test-avatar.png";

const Testimonial = () => {
  return (
    <>
      <section>
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[54px] font-semibold font-raleway leading-17.5 text-[#000000] pb-2 ">
              About
              <span className="text-[#f16722]">10’s Event</span>
            </h1>
            <img src={testBg} alt="icon image" /> 
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
