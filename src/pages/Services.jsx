import React from "react";
import Container from "../Common/Container/Container";
import gruopIcon from "../../src/assets/img/group-icon.png";
import services1 from "./../../src/assets/img/services/services1.png";
import services2 from "./../../src/assets/img/services/services2.png";
import services3 from "./../../src/assets/img/services/services3.png";
import services4 from "./../../src/assets/img/services/services4.png";
import services5 from "./../../src/assets/img/services/services5.png";

const Services = () => {
  const services = [
    {
      img: services1,
      title: "Event Planning",
      desc: "As the best event planner companies in the industry, we arm you with a lifetime of experience to turn your idea into the perfect event.",
    },

    {
      img: services2,
      title: "Protocol Service",
      desc: "We have a team of loyal, professional experts who specialize in protocol so, No matter what type of event you are hosting, we can serve you.",
    },

    {
      img: services3,
      title: "Food and Beverages",
      desc: "Our chefs and bartenders are skilled professionals who focus on quality so, No matter what service you need, we are ready to serve you.",
    },

    {
      img: services4,
      title: "Outside Catering",
      desc: "We have a team of professional experts in protocol, ready to serve any event with precision, care, and exceptional attention to detail.",
    },

    {
      img: services5,
      title: "Video and Photograph",
      desc: "We also specialize in high quality, High definition video and photography services that will make your event unforgettable.",
    },
  ];

  return (
    <>
      <section className="py-30">
        <Container>
          <div className="flex flex-col items-center justify-center">
            <h1 className="sm:text-[54px] text-[30px]  font-semibold font-raleway sm:leading-17.5 leading-8.75 text-center w-70 sm:w-120 md:w-full text-[#000000] pb-4  ">
              We Provide The
              <span className="text-[#f16722]"> Following Service</span>
            </h1>
            <img src={gruopIcon} alt="icon image" />
          </div>
          <div className="2xl:pt-18 xl:pt-12 lg:pt-12 md:pt-12 sm:pt-10 pt-8 flex flex-wrap 2xl:gap-18 xl:gap-10 lg:gap-8 md:gap-6 sm:gap-10 gap-8 justify-center items-center">
            {services.map((card, i) => (
              <div key={i} className="max-w-88 shadow-xl rounded-[20px] border-2 border-[#ddd]">
                <img
                  className="w-full rounded-[20px_20px_0_0]"
                  src={card.img}
                  alt="service images"
                />
                <div className="p-[20px_25px_22px_25px]">
                  <h3 className="text-[#261c13] font-normal font-raleway sm:text-[27px] text-[25px] leading-9 pb-4 text-center">
                    {card.title}
                  </h3>
                  <p className="text-[#261C13] font-normal font-raleway leading-6.5 sm:text-[18px] text-[16px] max-w-75.25 text-center mx-auto">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
