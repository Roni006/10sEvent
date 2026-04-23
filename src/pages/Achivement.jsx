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
      <div className="bg-[#F16722] p-[14px_75px] grid grid-cols-4 items-center gap-12.5">
        {counters.map((counter, i) => (
          <div key={i} className="text-center max-w-[267]">
            <h3 className="text-white text-[54px] font-raleway font-bold leading-17.5 pb-1.25">
              {counter.text}
            </h3>
            <p className="text-white leading-8.75 font-raleway text-[28px] font-semibold">
              {counter.details}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Achivement;
