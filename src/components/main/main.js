import React from "react";
import Header from "../header";
import Footer from "../footer";
import Img from "../../elements/img";

function Main() {
  return (
    <main className="w-full h-full relative">
      <section className="flex flex-col relative">
        <Header />
        <section className="MAIN flex flex-col relative font-poppins text-[#FFF] lg:px-[100px] mb:px-[30px] sm:px-[50px] lg:block">
          <section
            className="HERO flex mb:flex-col lg:flex-row lg:justify-between mb:justify-center mb:items-center lg:items-start lg:pt-[100px] mb:pt-[50px]"
            id="about"
          >
            <div className="flex lg:w-[430px] lg:h-[500px] mb:w-[230px] mb:h-[300px] justify-center items-center mb:block lg:hidden">
              <Img
                src="assets/img/gambar-utama.svg"
                alt="gambar profile"
                className=""
              />
            </div>
            <section className="KIRI flex flex-col lg:space-y-[50px] mb:space-y-[30px]">
              <div className="flex flex-col space-y-[10px] mb:items-center lg:items-start ">
                <text className="font-semibold lg:text-[36px] mb:text-[16px] sm:text-[20px] lg:justify-center lg:items-center flex ">
                  Hello Buds
                </text>
                <text className="font-semibold lg:text-[52px] mb:text-[26px] sm:text-[36px]">
                  I am <span className="text-[#C6FE7D]">Ryan Chandra</span>
                </text>
                <text className="lg:text-[20px] mb:text-[9px] sm:text-[14px] font-normal text-[#999999] pt-[10px] lg:pb-[50px] mb:pb-[20px]">
                  Front-End Web Developer
                </text>
                <div className="border border-[#999999] lg:max-w-[76px] mb:max-w-[56px] w-full  "></div>
                <text className="font-normal font-avaragesans text-[#999999] lg:text-[20px] mb:text-[9px] sm:text-[14px] lg:pt-[20px] mb:pt-[10px] lg:w-3/4 text-justify mb:w-4/5">
                  Hi, I'm Ryan Chandra, a 7th-semester student at Universitas
                  Pembangunan Jaya with a passion for front-end development. I'm
                  particularly interested in crafting user interfaces using
                  React and Tailwind CSS. My goal is to become a professional in
                  front-end design and development. When I'm not coding, I enjoy
                  immersing myself in the world of comics, which inspires my
                  creativity in unique ways.
                </text>
              </div>

              <div className="flex flex-row space-x-[20px] mb:justify-center lg:justify-start">
                <button className="lg:w-[230px] lg:h-[60px] mb:w-[100px] mb:h-[30px] bg-[#C6FE7D]/70 flex flex-row space-x-[10px] justify-center items-center rounded-md">
                  <Img
                    src="assets/img/icon-downloadcv.svg"
                    alt="paper"
                    className="flex justify-center items-center"
                  />
                  <text className="lg:text-[20px] mb:text-[9px] font-semibold">
                    Download CV
                  </text>
                </button>

                <button className="lg:w-[230px] lg:h-[60px] mb:w-[100px] mb:h-[30px] lg:text-[20px] mb:text-[9px] text-[#FFF] font-semibold border border-[#FFF] rounded-md">
                  More
                </button>
              </div>
            </section>

            <section className="KANAN flex flex-col justify-center items-center w-full h-full">

            <div className="flex lg:w-[430px] lg:h-[500px] justify-center items-center mb:hidden lg:block">
              <Img
                src="assets/img/gambar-utama.svg"
                alt="gambar profile"
                className=""
              />
            </div>

              <div className="flex flex-row justify-between items-center space-x-[20px] lg:pr-[90px] mb:pt-[50px]">
                <text className="text-[#FFF] font-semibold text-[20px]">
                  Find Me On
                </text>
                <button className="bg-[#BEFF6A]/10 w-[55px] h-[50px] rounded-full flex items-center justify-center hover:bg-[#BEFF6A]/20">
                  <Img
                    src="assets/img/icon-facebook.svg"
                    alt="icon facebook"
                    className=""
                  />
                </button>
                <button className="bg-[#BEFF6A]/10 w-[55px] h-[50px] rounded-full flex items-center justify-center hover:bg-[#BEFF6A]/20">
                  <Img
                    src="assets/img/icon-instagram.svg"
                    alt="icon instagram"
                    className=""
                  />
                </button>
                <button className="bg-[#BEFF6A]/10 w-[55px] h-[50px] rounded-full flex items-center justify-center hover:bg-[#BEFF6A]/20">
                  <Img
                    src="assets/img/icon-whatsapp.svg"
                    alt="icon whatsapp"
                    className=""
                  />
                </button>
              </div>
            </section>
          </section>

          <section className="flex flex-col pt-[200px] mb:hidden" id="project">
            <div className="flex justify-center items-center pb-[100px] relative">
              <div className="z-10">
                <text className="font-semibold text-[#FFF] text-[36px] ">
                  Latest Project
                </text>
              </div>
              <div className="absolute inset-0 flex justify-center items-center z-0 top-0 -translate-y-11 ">
                <text
                  className="font-semibold text-[#0C0C0C]  text-[200px] -mx-[50px]"
                  style={{ WebkitTextStroke: "1px rgba(153, 153, 153, 0.2)" }}
                >
                  MY PROJECT
                </text>
              </div>
            </div>

            <div className="flex flex-col space-y-[50px]">
              <div className="bg-[#131313] border border-[#FFFFFF]/5 p-[50px] flex flex-row justify-between rounded-3xl">
                <div>
                  <Img
                    src="assets/img/echo-news.png"
                    alt="gambaar1"
                    className="h-[190px] w-[320px] border-2 rounded-xl flex justify-center items-center"
                  />
                </div>
                <div className="flex items-center">
                  <text className="font-semibold text-[32px] flex items-center">
                    Website Echo bagian News
                  </text>
                </div>

                <div className="flex items-center">
                  <a
                    href="https://news-echo.vercel.app/"
                    className="font-semibold text-[20px] px-[20px] py-[15px] rounded-xl bg-[#C6FE7D]/70"
                  >
                    View Details
                  </a>
                </div>
              </div>

              <div className="bg-[#131313] border border-[#FFFFFF]/5 p-[50px] flex flex-row justify-between rounded-3xl">
                <div>
                  <Img
                    src="assets/img/elga-v1.png"
                    alt="gambaar1"
                    className="h-[190px] w-[320px] border-2 rounded-xl flex justify-center items-center"
                  />
                </div>
                <div className="flex items-center">
                  <text className="font-semibold text-[32px] flex items-center">
                    Elga V1
                  </text>
                </div>

                <div className="flex items-center">
                  <a
                    href="https://elga-1.vercel.app/"
                    className="font-semibold text-[20px] px-[20px] py-[15px] rounded-xl bg-[#C6FE7D]/70"
                  >
                    View Details
                  </a>
                </div>
              </div>

              <div className="bg-[#131313] border border-[#FFFFFF]/5 p-[50px] flex flex-row justify-between rounded-3xl">
                <div>
                  <Img
                    src=""
                    alt="gambaar1"
                    className="h-[190px] w-[320px] border-2 rounded-xl flex justify-center items-center"
                  />
                </div>
                <div className="flex items-center">
                  <text className="font-semibold text-[32px] flex items-center">
                    Elga V1
                  </text>
                </div>

                <div className="flex items-center">
                  <a
                    href=" #"
                    className="font-semibold text-[20px] px-[20px] py-[15px] rounded-xl bg-[#C6FE7D]/70"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#131313] border border-[#FFFFFF]/5 p-[50px] flex flex-row justify-between rounded-3xl mt-[100px]">
              <div className="flex items-center">
                <text className="font-semibold text-[32px] text-[#FFF] ">
                  Have any project in mind?
                </text>
              </div>

              <div className="flex flex-row space-x-[30px] font-semibold">
                <div className="border border-[#FFF] px-[20px] py-[15px] rounded-xl">
                  <text className="text-[20px]">More Project</text>
                </div>
                <div className="bg-[#C6FE7D]/70 px-[20px] py-[15px] rounded-xl">
                  <text className="text-[20px]">More Project</text>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col pt-[200px] mb:hidden" id="blog">
            <div className="flex justify-center items-center pb-[100px] relative">
              <div className="z-10">
                <text className="font-semibold text-[#FFF] text-[36px] ">
                  Why Hire Me
                </text>
              </div>
              <div className="absolute inset-0 flex justify-center items-center z-0 top-0 -translate-y-11 ">
                <text
                  className="font-semibold text-[#0C0C0C]  text-[200px] -mx-[50px]"
                  style={{ WebkitTextStroke: "1px rgba(153, 153, 153, 0.2)" }}
                >
                  WHY HIRE ME
                </text>
              </div>
            </div>

            <div className="flex flex-row justify-between space-x-[80px]">
              <div className="flex flex-col">
                <div className="border border-[#999]/20 p-[20px] rounded-full">
                  <div className="border border-[#C6FE7D] bg-[#C6FE7D]/10 p-[70px] rounded-full">
                    <Img
                      src="assets/img/icon-workaholic.svg"
                      alt="icon workaholic"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                </div>
                <div className="pt-[50px] flex flex-col items-center space-y-[20px]">
                  <text className="font-medium text-[#FFF] text-[28px]">
                    Workaholic
                  </text>
                  <text className="font-normal font-avaragesans text-[#999] text-[20px] text-justify">
                    I’m a kind of person who can’t just stand around and doing
                    nothing. I have a tendency to do something productive.
                  </text>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="border border-[#999]/20 p-[20px] rounded-full">
                  <div className="border border-[#C6FE7D] bg-[#C6FE7D]/10 p-[70px] rounded-full">
                    <Img
                      src="assets/img/icon-communicative.svg"
                      alt="icon communicative"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                </div>
                <div className="pt-[50px] flex flex-col items-center space-y-[20px]">
                  <text className="font-medium text-[#FFF] text-[28px]">
                    Communicative
                  </text>
                  <text className="font-normal font-avaragesans text-[#999] text-[20px] text-justify ">
                    I have a broad understanding of verbal vocabulary.
                    Therefore, I can convey a message well to the receiver.
                  </text>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="border border-[#999]/20 p-[20px] rounded-full">
                  <div className="border border-[#C6FE7D] bg-[#C6FE7D]/10 p-[70px] rounded-full">
                    <Img
                      src="assets/img/icon-coorperative.svg"
                      alt="icon coorperative"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                </div>
                <div className="pt-[50px] flex flex-col items-center space-y-[20px]">
                  <text className="font-medium text-[#FFF] text-[28px]">
                    Workaholic
                  </text>
                  <text className="font-normal font-avaragesans text-[#999] text-[20px] text-justify">
                    I’m a kind of person who can’t just stand around and doing
                    nothing. I have a tendency to do something productive.
                  </text>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="border border-[#999]/20 p-[20px] rounded-full">
                  <div className="border border-[#C6FE7D] bg-[#C6FE7D]/10 p-[70px] rounded-full">
                    <Img
                      src="assets/img/icon-perfectionist.svg"
                      alt="icon perfectionist"
                      className="w-[60px] h-[60px]"
                    />
                  </div>
                </div>
                <div className="pt-[50px] flex flex-col items-center space-y-[20px]">
                  <text className="font-medium text-[#FFF] text-[28px]">
                    Perfectionist
                  </text>
                  <text className="font-normal font-avaragesans text-[#999] text-[20px] text-justify">
                    I have a strong intuition. I have remained consistent with
                    high quality standards to present a most worthy result.
                  </text>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col pt-[200px] mb:hidden">
            <div className="flex justify-center items-center pb-[100px] relative">
              <div className="z-10">
                <text className="font-semibold text-[#FFF] text-[36px] ">
                  Tools and Skills
                </text>
              </div>
              <div className="absolute inset-0 flex justify-center items-center z-0 top-0 -translate-y-11 overflow-hidden max-w-[1440px]">
                <text
                  className="font-semibold text-[#0C0C0C]  text-[200px] -mx-[1000px] uppercase"
                  style={{ WebkitTextStroke: "1px rgba(153, 153, 153, 0.2)" }}
                >
                  Tools and Skills
                </text>
              </div>
            </div>

            <div className="flex flex-row justify-between pb-[200px]">
              <div className="bg-[#323131] rounded-xl p-[15px] flex items-center justify-center">
                <Img
                  src="assets/img/logo-html2-2.svg"
                  alt="logo html"
                  className="flex items-center w-[150px] h-[150px]"
                />
              </div>

              <div className="bg-[#323131] rounded-xl p-[15px] flex items-center justify-center">
                <Img
                  src="assets/img/logo-react2.svg"
                  alt="logo react"
                  className="flex items-center w-[150px] h-[150px]"
                />
              </div>

              <div className="bg-[#323131] rounded-xl p-[15px] flex items-center justify-center">
                <Img
                  src="assets/img/logo-tailwind.svg"
                  alt="logo tailwind"
                  className="flex items-center w-[150px] h-[150px]"
                />
              </div>

              <div className="bg-[#323131] rounded-xl p-[15px] flex items-center justify-center">
                <Img
                  src="assets/img/logo-css2-2.svg"
                  alt="logo css"
                  className="flex items-center w-[150px] h-[150px]"
                />
              </div>

              <div className="bg-[#323131] rounded-xl p-[15px] flex items-center justify-center">
                <Img
                  src="assets/img/logo-javascript.svg"
                  alt="logo javascript"
                  className="flex items-center w-[150px] h-[150px]"
                />
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </section>
    </main>
  );
}

export default Main;
