import React from "react";
import Container from "../Common/Container/Container";
import portfolioBg from "../../src/assets/img/workportfolio/portfolio-bg.png";
import wpTop1 from "../../src/assets/img/workportfolio/wp-top-1.png";
import wpTop2 from "../../src/assets/img/workportfolio/wp-top-2.png";
import wpTop3 from "../../src/assets/img/workportfolio/wp-top-3.png";
import wpTop4 from "../../src/assets/img/workportfolio/wp-top-4.png";
import wpTop5 from "../../src/assets/img/workportfolio/wp-top-5.png";
import wpTop6 from "../../src/assets/img/workportfolio/wp-top-6.png";

const WorkPortfolio1 = () => {
  // const wPortfolio1 = [
  //   {
  //     subtitle: "Eric's Wedding",
  //     title: "Event Planning & Protocol Service",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  //   },
  //   {
  //     portfolio: wpTop1,
  //   },
  //   {
  //     portfolio: wpTop2,
  //   },
  //   {
  //     portfolio: wpTop3,
  //   },
  //   {
  //     portfolio: wpTop4,
  //   },
  //   {
  //     portfolio: wpTop5,
  //   },
  //   {
  //     portfolio: wpTop6,
  //   },
  //   {
  //     portfolio: wpTop6,
  //   },
  // ];

  return (
    <>
      <section className="py-20">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col xl:flex-row jsuctify-center items-start gap-7.5">
              {/* left content  */}
              <div className="relative">
                <img src={portfolioBg} alt="" />
                <div className="absolute inset-0 flex flex-col items-start justify-center lg:p-[30px_20px_40px_30px] sm:p-[94px_74px_147px_50px] p-[50px_35px_50px_20px]">
                  <h3 className="text-[#f16722] font-bold font-raleway lg:text-[28px] sm:text-[38px] text-[20px] leading-12">
                    Eric's Wedding
                  </h3>
                  <h1 className=" sm:text-[50px] text-[30px] font-bold font-raleway lg:leading-15 sm:leading-17.5 leading-10 text-[#000000] max-w-108.25 p-[5px_0_16px_0]">
                    Event Planning & Protocol Service
                  </h1>
                  <p className="text-[18px] font-normal font-raleway leading-6.5 text-[#000000] max-w-100">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>
              {/* right content  */}
              <div className="  grid grid-cols-2 items-center justify-center sm:gap-8 gap-4">
                <img className="rounded-md" src={wpTop1} alt="work portfolio" />
                <img className="rounded-md" src={wpTop2} alt="work portfolio" />
                <img className="rounded-md" src={wpTop3} alt="work portfolio" />
                <img className="rounded-md" src={wpTop4} alt="work portfolio" />
              </div>
            </div>
            <div className="flex xl:flex-row flex-col sm:gap-10.5 gap-5 mt-8 items-center justify-center">
              <img
                className="rounded-md xl:w-188.75 xl:h-65.75 w-120 h-50"
                src={wpTop5}
                alt="work portfolio"
              />
              <img
                className="rounded-md  xl:w-87.5 xl:h-65.75 w-137.5 h-75"
                src={wpTop6}
                alt="work portfolio"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WorkPortfolio1;
