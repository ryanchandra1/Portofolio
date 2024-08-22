import React from "react";
import { Link } from "react-scroll";
 
function Header () {
    return (
        <header className="w-full h-full">
            <section className="flex flex-row justify-between items-center px-[50px] py-[30px] bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C] h-1/2 to-[#C6FE7D]/5 rounded-b-[100px]">
                <div className="font-poppins flex items-center">
                    <a href="/" className="text-[#FFF] text-[30px] font-semibold hover:text-[#C6FE7D] duration-300 hover:scale-125 drop-shadow-lg">
                        <span className="text-[#C6FE7D]">R</span><span className="">C</span> 
                    </a>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="flex flex-row justify-between space-x-[50px] font-poppins text-[#FFF] text-[20px]">
                        <a href=" /" className="hover:-translate-y-2 duration-300 transition-all ease-in-out">
                            Home
                        </a>
                        <Link to="about" smooth={true} duration={500}  className="hover:-translate-y-2 duration-300 transition-all ease-in-out cursor-pointer">
                            About
                        </Link>
                        <Link to="project" smooth={true} duration={500} className="hover:-translate-y-2 duration-300 transition-all ease-in-out cursor-pointer">
                            Project
                        </Link>
                        <Link to="blog" smooth={true} duration={500}  className="hover:-translate-y-2 duration-300 transition-all ease-in-out cursor-pointer">
                            Blog
                        </Link>
                    </ul>
                </div>

                <div className="flex items-center">
                    <button className="flex items-center font-poppins text-[20px] font-semibold text-[#C6FE7D] p-3 border-2 border-[#C6FE7D] rounded-md hover:bg-[#C6FE7D]/10 duration-100">
                        Contact Me
                    </button>   

                </div>

            </section>

        </header>
    )
}

export default Header;