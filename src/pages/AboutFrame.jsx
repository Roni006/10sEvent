import React from 'react'
import Container from '../Common/Container/Container'
import bgShape from "../../src/assets/img/about/about-bottom.png";
const AboutFrame = () => {
  return (
    <>
      <section className="py-20">
        <Container>
          <div>
            <div>
              {/* about top  */}
              <h1 className="text-[54px] font-raleway font-semibold leading-17.5">
                About <span className="text-[#F16722]">10'S EVENT</span>
              </h1>
              <img src={bgShape} alt="About Shape" />

              <p className="text-[16px] font-raleway font-normal leading-6.25 text-[#0D0600] max-w-144.5 mt-6">
                We are a professional team of loyal and professional event
                coordinators who work together to serve our clients' every need.
                From start to finish, we are dedicated to making sure your event
                is a success.
              </p>
              <h5 className="text-[18px] font-semibold font-raleway leading-7 text-[#F16722] mt-3">
                From A to Z
              </h5>
            </div>
            <div></div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AboutFrame