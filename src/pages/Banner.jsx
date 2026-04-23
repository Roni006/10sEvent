import React from 'react'
import Container from '../Common/Container/Container'
import BannerBg from '../../src/assets/img/banner.png'

const Banner = () => {
  return (
    <>
      <section className="-mt-20">
        <div className="relative">
          <img className="w-full h-auto" src={BannerBg} alt="banner bg" />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-[#f16722] max-w-212.5 text-[76px] leading-25 font-semibold font-raleway text-center">
              We are 10’s EVENT
              <span className="text-white"> We bring your</span> dream event
              <span className="text-white"> to life!</span>
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner