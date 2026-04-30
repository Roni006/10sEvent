import React from "react";
import Container from "../Common/Container/Container";
import bgShape from "../../src/assets/img/about/about-bottom.png";
import aboutRight from "../../src/assets/img/aboutus/about10s.png";
const AboutFrame = () => {
  return (
    <>
      <section className="sm:py-20 py-12">
        <Container>
          <div className="flex xl:flex-row flex-col justify-between gap-10">
            <div>
              {/* about top  */}
              <div>
                <h1 className="sm:text-[54px] text-[40px] text-center font-raleway font-semibold leading-17.5 mb-4">
                  About <span className="text-[#F16722]">10'S EVENT</span>
                </h1>
                <img className="mx-auto" src={bgShape} alt="About Shape" />
              </div>
              {/* left bottom content  */}
              <div>
                <div>
                  <p className="text-[16px] font-raleway font-normal leading-6.25 text-[#0D0600] max-w-144.5 mt-6  sm:text-left text-justify">
                    We are a professional team of loyal and professional event
                    coordinators who work together to serve our clients' every
                    need. From start to finish, we are dedicated to making sure
                    your event is a success.
                  </p> 
                </div>

                <div>
                  <h5 className="text-[18px] font-semibold font-raleway leading-7 text-[#F16722] mt-3">
                    From A to Z
                  </h5>
                  <p className="text-[16px] font-raleway font-normal leading-6.25 text-[#0D0600] max-w-144.5 mt-6">
                    We know how important it is to have everything in place
                    before the big day. From venue selections to onsit@e
                    coordination, we take care of everything so you can just sit
                    back and enjoy the party!
                  </p>

                  <h5 className="text-[18px] font-semibold font-raleway leading-7 text-[#F16722] mt-3">
                    Teamwork creates the dream
                  </h5>
                </div>

                <div>
                  <p className="text-[16px] font-raleway font-normal leading-6.25 text-[#0D0600] max-w-144.5 mt-6">
                    Our highly trained team of event planners will bring your
                    vision to life. They'll work with you every step of the way
                    to make sure your event is a success from start-to-finish.
                  </p>

                  <h5 className="text-[18px] font-semibold font-raleway leading-7 text-[#F16722] mt-3">
                    We are the professionals
                  </h5>
                </div>

                <div>
                  <p className="text-[16px] font-raleway font-normal leading-6.25 text-[#0D0600] max-w-144.5 mt-6">
                    10's event offers a full range of services including event
                    planning, catering, protocol, and venue selection. Our team
                    members are experts in their fields so you can rest assured
                    that your events will be in good hands.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={aboutRight} alt="10's event" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutFrame;
