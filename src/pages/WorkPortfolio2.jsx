import React from "react";
import Container from "../Common/Container/Container"; 
import portfolioBg from "../../src/assets/img/workportfolio/portfolio-bg.png";
import wpTop1 from '../../src/assets/img/workportfolio/wp-top-1.png'
import wpTop2 from '../../src/assets/img/workportfolio/wp-top-2.png'
import wpTop3 from '../../src/assets/img/workportfolio/wp-top-3.png'
import wpTop4 from '../../src/assets/img/workportfolio/wp-top-4.png'
import wpTop5 from '../../src/assets/img/workportfolio/wp-top-5.png'
import wpTop6 from '../../src/assets/img/workportfolio/wp-top-6.png'
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
              {/* right content  */}
              <div className="grid grid-cols-2 items-center justify-center gap-8">
                <img src={wpTop1} alt="work portfolio" />
                <img src={wpTop2} alt="work portfolio" />
                <img src={wpTop3} alt="work portfolio" />
                <img src={wpTop4} alt="work portfolio" />
              </div>
            </div>
            <div className="flex gap-10.5 mt-8 ">
              <img src={wpTop5} alt="work portfolio" />
              <img className="w-[280px]" src={wpTop6} alt="work portfolio" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WorkPortfolio2;
