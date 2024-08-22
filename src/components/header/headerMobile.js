import React, { useState } from "react";
import { Link } from "react-scroll";

function HeaderM() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-full relative">
      <section className="flex flex-row justify-between items-center px-[20px] py-[30px] bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C] h-1/2 to-[#C6FE7D]/5 rounded-b-[50px]">
        <div className="font-poppins flex items-center">
          <a
            href="/"
            className="text-[#FFF] text-[30px] font-semibold hover:text-[#C6FE7D] duration-300 hover:scale-125 drop-shadow-lg"
          >
            <span className="text-[#C6FE7D]">R</span>
            <span className="">C</span>
          </a>
        </div>
        
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#FFF]">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex justify-center items-center">
          <ul className="flex flex-row justify-between space-x-[50px] mb:space-x-[10px] font-poppins text-[#FFF] text-[20px]">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:-translate-y-2 duration-300 transition-all ease-in-out cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:-translate-y-2 duration-300 transition-all ease-in-out cursor-pointer"
            >
              About
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="hover:-translate-y-2 duration-300 transition-all ease-in-out cursor-pointer"
            >
              Project
            </Link>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="hover:-translate-y-2 duration-300 transition-all ease-in-out cursor-pointer"
            >
              Blog
            </Link>
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          <button className="flex items-center font-poppins text-[20px] font-semibold text-[#C6FE7D] p-3 border-2 border-[#C6FE7D] rounded-md hover:bg-[#C6FE7D]/10 duration-100">
            Contact Me
          </button>
        </div>
      </section>

      {/* Dropdown Menu untuk Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 w-full bg-[#0C0C0C] border-t border-[#C6FE7D] z-10">
          <ul className="flex flex-col items-center space-y-4 py-4 font-poppins text-[#FFF] text-[20px]">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-[#C6FE7D] duration-300 transition-all ease-in-out cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-[#C6FE7D] duration-300 transition-all ease-in-out cursor-pointer"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="hover:text-[#C6FE7D] duration-300 transition-all ease-in-out cursor-pointer"
              onClick={toggleMenu}
            >
              Project
            </Link>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="hover:text-[#C6FE7D] duration-300 transition-all ease-in-out cursor-pointer"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}

export default HeaderM;
