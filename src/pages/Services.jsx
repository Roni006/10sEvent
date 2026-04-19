import React from "react";
import Container from "../Common/Container/Container";
import gruopIcon from "../../src/assets/img/group-icon.png";
import service1 from "./../../src/assets/img/service/service1.png";
import service2 from "./../../src/assets/img/service/service2.png";
import service3 from "./../../src/assets/img/service/service3.png";
import service4 from "./../../src/assets/img/service/service4.png";
import service5 from "./../../src/assets/img/service/service5.png";

const Services = () => {
  return (
    <>
      <section className="py-30">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[54px] font-semibold font-raleway leading-17.5 text-[#000000] pb-2 ">
              We Provide The{" "}
              <span className="text-[#f16722]">Following Service</span>
            </h1>
            <img src={gruopIcon} alt="icon image" />
          </div>
          <div className="pt-18">
            <div className="max-w-88 shadow-xl rounded-[20px] border-2 border-[#ddd]">
              <img className="rounded-[20px_20px_0_0]" src={service1} alt="service images" />
              <div className="p-[20px_25px_22px_25px]">
                <h3 className="text-[#261c13] font-normal font-raleway text-[27px] leading-9 pb-4 text-center">
                  Event Planning
                </h3>
                <p className="text-[#261C13] font-normal font-raleway leading-6.5 text-[18px] max-w-75.25 text-center mx-auto">
                  As the best event planner companies in the industry, we arm
                  you with a lifetime of experience to turn your idea into the
                  perfect event.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
