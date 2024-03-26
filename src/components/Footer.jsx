import React from "react";
import { FaDribbble, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-black h-[150px] text-white font-Roboto flex flex-col justify-center items-center">
        <span className="flex   gap-4 cursor-pointer p-4 items-center">
          <span className="flex flex-col gap-2 text-lg font-Lato">
            <span className="flex items-center gap-2">
              <MdEmail />
              <p>info@indiadesignershow.com</p>
            </span>
            <span className="flex items-center gap-2">
              <MdOutlinePhoneIphone />
              <p>+91 9431697649</p>
            </span>
          </span>
          <FaInstagram className="text-4xl bg-[#0f0f0f] p-2 rounded-full" />
          <FaDribbble className="text-4xl bg-[#0f0f0f] p-2 rounded-full" />
          <FaTwitter className="text-4xl bg-[#0f0f0f] p-2 rounded-full" />
          <FaYoutube className="text-4xl bg-[#0f0f0f] p-2 rounded-full" />
        </span>
        <hr className="bg-white w-full " />
        <p className="font-Lato text-white text-center m-4">
          @ 2024 XYZ. All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
