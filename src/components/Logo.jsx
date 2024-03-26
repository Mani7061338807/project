import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Navbar from "./Navbar";

const Logo = () => {
  return (
    <>
      <div className=" flex justify-between  ss:px-[6rem] px-[2rem] pt-[2rem] ">
        <p className="text-[32px] font-semibold font-Lato text-shadow">LOGO</p>
        <span className="hidden ss:flex gap-6 justify-center items-center">
          <span className="background p-2 rounded-xl">
            <FaInstagram className="text-2xl  " />
          </span>
          <span className="background p-2 rounded-xl">
            <FaLinkedin className="text-2xl" />
          </span>
          <span className="background p-2 rounded-xl">
            <IoMdMail className="text-2xl" />
          </span>
          <button className="px-8 py-1 p-4 font-Lato font-medium text-lg text-primary  rounded-lg border border-primary">
            Lets Connect
          </button>
        </span>
        <div className="ss:hidden block">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Logo;
