import React from "react";
import Container from "../Common/Container/Container";
import Service1 from "../../src/assets/img/service/service1.png";
import Service2 from "../../src/assets/img/service/service2.png";
import Service3 from "../../src/assets/img/service/service3.png";
import Service4 from "../../src/assets/img/service/service4.png";
import Service5 from "../../src/assets/img/service/service5.png";
import Service6 from "../../src/assets/img/service/service6.png";
import Service7 from "../../src/assets/img/service/service7.png";
import Service8 from "../../src/assets/img/service/service8.png";
import Service9 from "../../src/assets/img/service/service9.png";
import Service10 from "../../src/assets/img/service/service10.png";

const Service = () => {
  const eventService = [
    {
      title: "Event Planning",
      desc: "Planning an event should be a fun project, not one that causes headaches and stress. It doesn't have to be harmful to your health, your relationships, or the environment. Pick us to help you organize and plan your event and things will look a lot more manageable and brighter. We know it can seem overwhelming at first, but let's come up with a plan!.",
      img1: Service1,
      img2: Service2,
    },

    {
      title: "Protocol Service",
      desc: "Are you looking for a professional and reliable protocol services company to help you with your upcoming event? 10's Event Protocol service is a great choice! We have a team of experienced and dedicated professionals who are passionate about helping our clients create successful events.",
      img1: Service3,
      img2: Service4,
    },

    {
      title: "Food and Beverages",
      desc: " At 10's Event, we know that food and beverages are an important part of any event and that's why Our team of experienced chefs and bartenders are dedicated to providing our clients with the highest quality cuisine and service. We offer a variety of menus to suit any event, and our team is always available to customize a menu to your specific needs. Whether you're hosting a corporate event, wedding, or private party, 10's Event will make sure your guests are well-fed and well-hydrated. Contact us today to learn more about our catering services",
      img1: Service5,
      img2: Service6,
    },

    {
      title: "Outside Catering",
      desc: "At 10's Event, we believe that great food and drink are essential to any successful event. That's why we only work with the best chefs and bartenders in the business. We're dedicated to providing our clients with top-quality outside catering services, and we're proud to say that we've never had a complaint about our food or drink.",
      img1: Service7,
      img2: Service8,
    },

    {
      title: "Video and Photograph",
      desc: "Looking for a way to make your events even more memorable? 10's Event can help! We also specialize in high quality, High definition video and photography services that will make your event unforgettable. We also offer professional video editing services to ensure that your memories are captured perfectly.",
      img1: Service9,
      img2: Service10,
    },
  ];
  return (
    <>
      <section className="md:py-0 sm:py-0 ">
        <Container>
          <div className="">
            {eventService.map((service, i) => (
              <div className=" flex lg:flex-row flex-col justify-center sm:gap-11.25 gap-5 sm:pt-12 pt-8">
                {/* left part  */}
                <div className="lg:max-w-107.5 sm:max-w-auto mx-auto">
                  <h2 className="lg:text-[30px] sm:text-[38px] text-[35px] lg:text-left text-center font-semibold leading-12.25 text-[#f16722]">
                    {service.title}
                  </h2>
                  <p className="text-[#0d0600] leading-6.25 font-normal font-raleway text-[18px] lg:pt-2 sm:pt-5  pt-2 text-justify">
                    {service.desc}
                  </p>
                </div>

                {/* right part */}
                <div className="max-w-211.25 flex sm:flex-row flex-col items-center justify-center lg:gap-5 md:gap-8 sm:gap-5 gap-3 md:pt-4 sm:-mt-5 pt-0  ">
                  <div>
                    <img
                      className="md:-w-[280px] w-full rounded-md"
                      src={service.img1}
                      alt="sevice images"
                    />
                  </div>
                  <div>
                    <img
                      className="md:-w-70 w-full rounded-md"
                      src={service.img2}
                      alt="service images"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Service;
