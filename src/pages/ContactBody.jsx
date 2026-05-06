import React from "react";
import Container from "../Common/Container/Container";
import sideMap from "../../src/assets/img/contact-side-map.png";

const ContactBody = () => {
  return (
    <>
      <section className="py-20">
        <Container>
          <div>
            <div className="flex justify-center gap-25">
              {/* left part  */}
              <div className="w-160.25 ">
                <h1 className="font-raleway text-[54px] text-[#000000] leading-17.5 font-semibold">
                  Say Hello!
                </h1>

                <form action="#" className="mt-8.75">
                  <div className="flex flex-col gap-5">
                    {/* name  */}
                    <div>
                      <label className="text-[18px] text-[#f16722] leading-8.75 font-semibold font-raleway mb-2">
                        Full Name
                      </label>
                      <br />
                      <input
                        className="focus:border-[#f16722] duration-200 w-full text-[16px] font-raleway font-medium p-[12px_35px_12px_23px] border border-[#ACACAC] rounded-xl outline-none    "
                        type="text"
                        placeholder="Enter Name"
                      />
                    </div>

                    {/* number  */}
                    <div>
                      <label className="text-[18px] text-[#f16722] leading-8.75 font-semibold font-raleway mb-2">
                        Conatact Number
                      </label>
                      <br />
                      <input
                        className="focus:border-[#f16722] duration-200 w-full text-[16px] font-raleway font-medium p-[12px_35px_12px_23px] border border-[#ACACAC] rounded-xl outline-none    "
                        type="number"
                        placeholder=" Conatact Number"
                      />
                    </div>

                    {/* email address  */}
                    <div>
                      <label className="text-[18px] text-[#f16722] leading-8.75 font-semibold font-raleway mb-2">
                        Email Address
                      </label>
                      <br />
                      <input
                        className="focus:border-[#f16722] duration-200 w-full text-[16px] font-raleway font-medium p-[12px_35px_12px_23px] border border-[#ACACAC] rounded-xl outline-none    "
                        type="email"
                        placeholder="Email Address"
                      />
                    </div>

                    {/* message  */}
                    <div>
                      <label className="text-[18px] text-[#f16722] leading-8.75 font-semibold font-raleway mb-2">
                        Message
                      </label>
                      <br />
                      <textarea
                        cols={5}
                        rows={8}
                        className="focus:border-[#f16722] duration-200 w-full text-[16px] font-raleway font-medium p-[12px_35px_12px_23px] border border-[#ACACAC] rounded-xl outline-none    "
                        type="text"
                        placeholder="Type your message here..."
                      ></textarea>
                    </div>
                    {/* button  */}
                    <button className="bg-[#f16722] border border-[#f16722] hover:bg-transparent hover:text-[#f16722] duration-300 py-3 px-45 w-full rounded-md font-raleway font-semibold text-[18px] leading-8.75 text-white cursor-pointer">
                      Send
                    </button>
                  </div>
                </form>
              </div>
              {/* right part  */}
              <div className="w-134 flex flex-col gap-4">
                {/* title and description */}
                <div>
                  <h3 className="text-[38px] font-semibold leading-12.25 font-raleway text-[#000000] ">
                    Contact With Us
                  </h3>

                  <p className="text-[16px] font-raleway font-normal text-[#000000] max-w-112.5 text-justify pt-2">
                    Looking for the ultimate planning partner? With us you will
                    get the full package of everything we have to offer: from
                    event management, to event coordination, theming, catering,
                    décor & styling, conference... Don't forget we can also
                    provide entertainment and venue sourcing too!.
                  </p>
                </div>

                {/* telephone number  */}
                <div>
                  <h3 className="text-[38px] font-semibold leading-12.25 font-raleway text-[#000000] pb-2">
                    Telephone
                  </h3>

                  <ul>
                    <li className="text-[18px] font-medium font-raleway text-[#000000] hover:text-[#f16722] duration-300">
                      <a href="tel: + 250 786 501 211">+ 250 786 501 211</a>
                    </li>
                    <li className="text-[18px] font-medium font-raleway text-[#000000] hover:text-[#f16722] duration-300">
                      <a href="tel: + 250 786 501 211">+ 250 786 501 211</a>
                    </li>
                  </ul>
                </div>

                {/* email  */}
                <div>
                  <h3 className="text-[38px] font-semibold leading-12.25 font-raleway text-[#000000] pb-2">
                    Email
                  </h3>

                  <ul>
                    <li className="text-[18px] font-medium font-raleway text-[#000000]">
                      <a href="mailto:10sEvent@gmail.com">10sEvent@gmail.com</a>
                    </li>
                  </ul>
                </div>

                {/* social media  */}
                <div>
                  <h3 className="text-[38px] font-semibold leading-12.25 font-raleway text-[#000000] pb-2">
                    Social Media
                  </h3>

                  <ul className="">
                    <li className="ml-4 pl-1 list-disc text-[18px] font-medium font-raleway text-[#000000] hover:text-[#f16722] duration-300">
                      <a href="#">Instagram</a>
                    </li>
                    <li className="ml-4 pl-1 list-disc text-[18px] font-medium font-raleway text-[#000000] hover:text-[#f16722] duration-300">
                      <a href="#">Twitter</a>
                    </li>
                    <li className="ml-4 pl-1 list-disc text-[18px] font-medium font-raleway text-[#000000] hover:text-[#f16722] duration-300">
                      <a href="#">Facebook</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* side map  */}
            <div className="mt-20">
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17324.341207083893!2d90.38425379665946!3d23.77470616691599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s34%20west%20nakhalpara!5e1!3m2!1sen!2sbd!4v1778090243688!5m2!1sen!2sbd"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe> */}
              <iframe
                src="https://maps.google.com/maps?q=34%20West%20Nakhalpara&output=embed"
                class="w-full h-100 border-0"
                loading="lazy"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactBody;
