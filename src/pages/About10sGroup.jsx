import React from 'react'
import Container from '../Common/Container/Container'
import agency from '../../src/assets/img/aboutus/about10agency.png'

const About10sGroup = () => {
  return (
    <>
      <section className="py-20">
        <Container>
          <div className='flex justify-center gap-10'>
            <div>
              <img src={agency} alt="10's Event Agency" />
            </div>
            <div>
              <h1 className="uppercase text-[#000000] font-raleway font-medium text-[54px] leading-17.5">
                ABOUT <span className="text-[#F16722]">10'S GROUP</span>
              </h1>
              <p className="font-raleway text-[18px] font-normal leading-6.5 text-[#000000] max-w-144.5">
                10's Group is a company founded by IRADUKUNDA Janvier with the
                aim to provide product and service to the community of Rwanda.
              </p>
              <h5 className="font-raleway font-semibold text-[#f16722] text-[18px] leading-6.5 p-[15px_0_20px_0]">
                What makes us unique?
              </h5>
              <p className="font-raleway text-[18px] font-normal leading-6.5 text-[#000000] max-w-144.5">
                Real teamwork is what sets us apart from many others in this
                business. We have a team of professionals who have been working
                together for many years now, with a vast knowledge of the
                industry. We understand that you need more than just one person
                to provide you with the right service, which is why we use a
                team approach to accomplishing your goals and objectives.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default About10sGroup