import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaAddressCard, FaMobileScreenButton } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Toggle = ({ setNavIcon }) => {
  return (
    <>
      <div className=" flex flex-col w-[40px] gap-4 items-center justify-center  p-6 navbar backdrop-filter backdrop-blur-lg   rounded-3xl font-Lato border border-[#ffffff36]">
        <IoIosArrowDroprightCircle
          className="text-xl cursor-pointer"
          onClick={() => setNavIcon(false)}
        />
        <MdHomeFilled className="text-2xl" />
        <FaAddressCard className="text-2xl" />
        <FaAddressCard className="text-2xl" />
        <FaMobileScreenButton className="text-2xl" />
        <FaMobileScreenButton className="text-2xl" />
        <FaMobileScreenButton className="text-2xl" />
      </div>
    </>
  );
};

export default Toggle;
