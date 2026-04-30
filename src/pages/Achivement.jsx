import React from "react";

const Achivement = () => {
      const counters = [
        {
          text: 150,
          details: "Events Planned",
        },
        {
          text: 40,
          details: "Protocal Service",
        },
        {
          text: 230,
          details: "Customers",
        },
        {
          text: 245,
          details: "Projects",
        },
      ];
  return (
    <>
      <div className="bg-[#F16722] p-[14px_75px] grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-center mx-auto items-center sm:gap-12.5 gap-5">
        {counters.map((counter, i) => (
          <div key={i} className="text-center max-w-[267]">
            <h3 className="text-white sm:text-[45px] text-[54px] font-raleway font-bold leading-17.5 pb-1.25">
              {counter.text}
            </h3>
            <p className="text-white leading-8.75 font-raleway lg:text-[25px] sm:text-[20px] text-[28px] font-semibold">
              {counter.details}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Achivement;
