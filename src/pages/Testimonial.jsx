import React from "react";
import Container from "../Common/Container/Container";
import testBg from "../../src/assets/img/test-img/testimonial-bg.png";
import avatar from "../../src/assets/img/test-img/test-avatar.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    // prevArrow: PrevArrow,
    // nextArrow: NextArrow,
  };
  
  // const NextArrow = ({ onClick }) => (
  //   <button onClick={onClick} className="p-2 bg-black text-white rounded-full">
  //     →
  //   </button>
  // );

  // const PrevArrow = ({ onClick }) => (
  //   <button onClick={onClick} className="p-2 bg-black text-white rounded-full">
  //     ←
  //   </button>
  // );
  return (
    <>
      <section>
        <Container>
          <div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-[54px] font-semibold font-raleway leading-17.5 text-[#000000] pb-2 ">
                Why People
                <span className="text-[#f16722]"> Love Us</span>
              </h1>
              <img src={testBg} alt="icon image" />
            </div>

            {/* feedback */}
            <div className="mt-15 ">
              <Slider {...settings}>
                <div className="px-3">
                  <div className="border-2 border-[#818181b0] w-full py-8 px-12.5 rounded-md">
                    <div className="flex items-center gap-6.5 mb-5">
                      <img src={avatar} alt="" />
                      <h4 className="text-[28px] text-[#f16722] font-semibold font-raleway leading-8.75">
                        Uwimana Ange
                      </h4>
                    </div>
                    <p className="text-[18px] font-normal text-[#000000] font-raleway leading-6.5 max-w-87.5 text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliquat enim ad minim veniam.
                    </p>
                  </div>
                </div>

                <div className="px-3">
                  <div className="border-2 border-[#818181b0] w-full py-8 px-12.5 rounded-md">
                    <div className="flex items-center gap-6.5 mb-5">
                      <img src={avatar} alt="" />
                      <h4 className="text-[28px] text-[#f16722] font-semibold font-raleway leading-8.75">
                        Uwimana Ange
                      </h4>
                    </div>
                    <p className="text-[18px] font-normal text-[#000000] font-raleway leading-6.5 max-w-87.5 text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliquat enim ad minim veniam.
                    </p>
                  </div>
                </div>

                <div className="px-3">
                  <div className="border-2 border-[#818181b0] w-full py-8 px-12.5 rounded-md">
                    <div className="flex items-center gap-6.5 mb-5">
                      <img src={avatar} alt="" />
                      <h4 className="text-[28px] text-[#f16722] font-semibold font-raleway leading-8.75">
                        Uwimana Ange
                      </h4>
                    </div>
                    <p className="text-[18px] font-normal text-[#000000] font-raleway leading-6.5 max-w-87.5 text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliquat enim ad minim veniam.
                    </p>
                  </div>
                </div>

                <div className="px-3">
                  <div className="border-2 border-[#818181b0] w-full py-8 px-12.5 rounded-md">
                    <div className="flex items-center gap-6.5 mb-5">
                      <img src={avatar} alt="" />
                      <h4 className="text-[28px] text-[#f16722] font-semibold font-raleway leading-8.75">
                        Uwimana Ange
                      </h4>
                    </div>
                    <p className="text-[18px] font-normal text-[#000000] font-raleway leading-6.5 max-w-87.5 text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliquat enim ad minim veniam.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Testimonial;
