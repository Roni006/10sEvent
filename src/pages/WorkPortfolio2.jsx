import React from "react";
import Container from "../Common/Container/Container";
import portfolioBg from "../../src/assets/img/workportfolio/portfolio-bg.png";
import wpBtm1 from "../../src/assets/img/workportfolio/wp-btm-1.png"; 
import wpBtm2 from "../../src/assets/img/workportfolio/wp-btm-2.png"; 
import wpBtm3 from "../../src/assets/img/workportfolio/wp-btm-3.png"; 
import wpBtm4 from "../../src/assets/img/workportfolio/wp-btm-4.png"; 
import wpBtm5 from "../../src/assets/img/workportfolio/wp-btm-5.png"; 
import wpBtm6 from "../../src/assets/img/workportfolio/wp-btm-6.png"; 
const WorkPortfolio2 = () => {
  return (
    <>
      <section className="">
        <Container>
          <div className="flex flex-col justify-center">
            <div className="flex jsuctify-center items-start gap-7.5">
              {/* left content  */}
              <div className="relative">
                <img src={portfolioBg} alt="" />
                <div className="absolute inset-0 flex flex-col items-start justify-center p-[94px_74px_147px_50px]">
                  <h3 className="text-[#f16722] font-medium font-raleway text-[38px] leading-12">
                    Ishaj's Birthday
                  </h3>
                  <h1 className="text-[50px] font-bold font-raleway leading-15 text-[#000000] max-w-[469px] p-[30px_0_16px_0]">
                    Event Planning, Protocol Service & Catering
                  </h1>
                  <p className="text-[18px] font-normal font-raleway leading-6.5 text-[#000000] max-w-100">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>
              {/* right content  */}
              <div className="grid grid-cols-2 items-center justify-center gap-8">
                <img src={wpBtm1} alt="work portfolio" />
                <img src={wpBtm2} alt="work portfolio" />
                <img src={wpBtm3} alt="work portfolio" />
                <img src={wpBtm4} alt="work portfolio" />
              </div>
            </div>
            <div className="flex gap-10.5 mt-8 ">
              <img src={wpBtm5} alt="work portfolio" />
              <img className="w-[280px]" src={wpBtm6} alt="work portfolio" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WorkPortfolio2;
