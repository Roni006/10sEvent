import React from "react";
import Container from "../Common/Container/Container";

const ContactBody = () => {
  return (
    <>
      <section className="py-20">
        <Container>
          <div>
            <div>
              <h1 className="font-raleway text-[54px] text-[#000000] leading-17.5 font-semibold">
                Say Hello!
              </h1>

              <form action="#" className="mt-8.75">
                {/* name  */}
                <div>
                  <label className="text-[18px] text-[#f16722] leading-8.75 font-semibold font-raleway mb-2">
                    Full Name
                  </label>
                  <br />
                  <input
                    className="w-full text-[16px] font-raleway font-medium p-[12px_35px_12px_23px] border border-[#ACACAC] rounded-xl outline-none    "
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
                    className="w-full text-[16px] font-raleway font-medium p-[12px_35px_12px_23px] border border-[#ACACAC] rounded-xl outline-none    "
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
                    className="w-full text-[16px] font-raleway font-medium p-[12px_35px_12px_23px] border border-[#ACACAC] rounded-xl outline-none    "
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
                    className="w-full text-[16px] font-raleway font-medium p-[12px_35px_12px_23px] border border-[#ACACAC] rounded-xl outline-none    "
                    type="text"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
              </form>
            </div>
            <div></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactBody;
