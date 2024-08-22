import React from "react";
import Img from "../../elements/img";

function FooterM() {
  return (
    <footer className="w-full h-full relative">
      <section className="flex flex-col justify-between items-center bg-[#0F0F0F] py-[50px] px-[20px] space-y-16 mt-[50px]">
        <div className="flex flex-col space-y-[30px] font-poppins">
          <text className="text-[16px] sm:text-[26px] font-semibold text-[#FFF]">
            Get In Touch
          </text>

          <text className="text-[#999999] text-[8px]">
            For business and partnership inquiry please contact me below!
          </text>

          <div className="flex flex-row space-x-[40px]">
            
            <div className="flex flex-col mb:space-y-[30px]">
                <div>

              <div className="border border-[#FFF] rounded-full sm:p-3 mb:p-2 flex items-center justify-center">
                <Img
                  src="assets/img/icon-phone.svg"
                  alt="icon phone"
                  className="flex justify-center items-center w-[15px] h-[15px]"
                  />
              </div>
                  </div>

              <div className="border border-[#FFF] rounded-full sm:p-3 mb:p-2 flex items-center justify-center">
                <Img
                  src="assets/img/icon-emailfooter.svg"
                  alt="icon phone"
                  className="flex justify-center items-center w-[15px] h-[15px]"
                />
              </div>

              <div className="border border-[#FFF] rounded-full sm:p-3 mb:p-2 flex items-center justify-center">
                  <Img
                    src="assets/img/icon-address.svg"
                    alt="icon phone"
                    className="flex justify-center items-center w-[20px] h-[20px]"
                  />
                </div>

            </div>

            <div className="flex flex-col mb:space-y-[20px] sm:space-y-[30px]">
              <div className="flex flex-col text-[13px] text-[#FFF]">
                <text className="text-[#999999]">Phone</text>
                <text>0851-5646-3370</text>
              </div>

              <div className="flex flex-col text-[13px] text-[#FFF]">
                <text className="text-[#999999]">Email</text>
                <text>ryan.chandra789@gmail.com</text>
              </div>

              <div className="flex flex-col text-[13px] text-[#FFF]">
                <text className="text-[#999999]">Address</text>
                <text className="text-[9px]">
                  Jl. Maribaya E8 No. 12 Villa Dago, Benda Baru, Pamulang,
                  Tangerang Selatan
                </text>
              </div>

            </div>

          
          </div>
        </div>

        <div className="flex items-center">
          <Img
            src="assets/img/icon-vector-footer.svg"
            alt="vector footer"
            className="mb:w-[150px] mb:h-[150px] sm:w-[200px] sm:h-[200px] "
          />
        </div>
      </section>
    </footer>
  );
}

export default FooterM;
