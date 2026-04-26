import React from 'react'
import Container from '../Common/Container/Container'
import Action from "../../src/assets/img/call-to-action.png";
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <>
      <section className="pb-20">
        <Container>
          <div className="relative">
            <img src={Action} alt="call to action image" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
              <h2 className="font-semibold font-raleway leading-12 text-white text-[38px]">
                Looking for the ultimate planning partner?
              </h2>
              <p className="text-white font-normal font-raleway text-[18px] leading-6.25 max-w-252.5 mx-auto text-center py-12">
                Looking for the ultimate planning partner? With us you will get
                the full package of everything we have to offer: from event
                management, to event coordination, theming, catering, décor &
                styling, conference... Don't forget we can also provide
                entertainment and venue sourcing too!.
              </p> 
                <Link className=" text-[18px] font-raleway font-bold leading-6.5 text-white py-3.5 px-8 bg-[#F16722] rounded-[30px]">
                  Contact Us
                </Link> 
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default CallToAction