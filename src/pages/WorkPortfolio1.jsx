import React from "react";
import Container from "../Common/Container/Container";
import portfolioBg from "../../src/assets/img/workportfolio/portfolio-bg.png";

const WorkPortfolio1 = () => {
  return (
    <>
      <section className="py-20">
        <Container>
          <div>
            <div>
              <div className="relative">
                <img src={portfolioBg} alt="" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-[94px_74px_147px_50px]">
                  <h3 className="text-[#f16722] font-semibold font-raleway text-[38px] leading-12">
                    Eric's Wedding
                  </h3>
                  <h1 className="text-[54px] font-semibold font-raleway leading-17.5 text-[#000000] max-w-108.25 p-[30px_0_16px_0]">
                    {" "}
                    Event Planning & Protocol Service
                  </h1>
                  <p className="text-[18px] font-normal font-raleway leading-6.5 text-[#000000] max-w-100">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WorkPortfolio1;
