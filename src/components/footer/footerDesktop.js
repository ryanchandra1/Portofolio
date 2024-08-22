import React from "react";
import Img from "../../elements/img";

function Footer() {
  return (
    <footer className="w-full h-full relative">
      <section className="flex flex-row justify-between items-center px-[100px] bg-[#0F0F0F] py-[50px]">
        <div className="flex flex-col space-y-[30px] font-poppins">
          <text className="text-[36px] font-semibold text-[#FFF]">
            Get In Touch
          </text>

          <text className="text-[#999999] text-[16px]">
            For business and partnership inquiry please contact me below!
          </text>

          <div className="flex flex-col space-y-[20px]">
            <div className="flex flex-row space-x-[20px]">
              <div className="border border-[#FFF] rounded-full p-3">
                <Img
                  src="assets/img/icon-phone.svg"
                  alt="icon phone"
                  className="flex justify-center items-center"
                />
              </div>
              <div className="flex flex-col text-[16px] text-[#FFF]">
                <text className="text-[#999999]">
                    Phone
                </text>
                <text>
                0851-5646-3370
                </text>

              </div>
            </div>

            <div className="flex flex-row space-x-[20px]">
              <div className="border border-[#FFF] rounded-full p-3">
                <Img
                  src="assets/img/icon-emailfooter.svg"
                  alt="icon phone"
                  className="flex justify-center items-center"
                />
              </div>
              <div className="flex flex-col text-[16px] text-[#FFF]">
                <text className="text-[#999999]">
                Email
                </text>
                <text>
                ryan.chandra789@gmail.com
                </text>

              </div>
            </div>

            <div className="flex flex-row space-x-[20px]">
              <div className="border border-[#FFF] rounded-full p-3">
                <Img
                  src="assets/img/icon-address.svg"
                  alt="icon phone"
                  className="flex justify-center items-center"
                />
              </div>
              <div className="flex flex-col text-[16px] text-[#FFF]">
                <text className="text-[#999999]">
                Address
                </text>
                <text>
                Jl. Maribaya E8 No. 12 Villa Dago, Benda Baru, Pamulang, Tangerang Selatan
                </text>

              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center">
            <Img 
            src="assets/img/icon-vector-footer.svg"
            alt="vector footer"
            className=""
            />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
