import React from "react";
import { AiDekho, BrandMonkey, Connecting, IDS, Pay } from "../assets/Index";
import Marquee from "react-fast-marquee";

const Brand = () => {
  return (
    <Marquee
      autoFill
      pauseOnHover
      speed={150}
      loop={0}
      gradient
      gradientColor="#0f0f0f"
      gradientWidth={500}
      className="w-[90%] bg-red-0 mx-auto  mb-[4rem] mt-[4rem]"
    >
      <div className="flex justify-around items-center  gap-[4rem]">
        <img src={Connecting} alt="" className="w-[145px] ml-[4rem]" />
        <img src={AiDekho} alt="" className="w-[260px] h-[68px]" />
        <img src={BrandMonkey} alt="" className="w-[165px] h-[117px]" />
        <img src={Pay} alt="" className="w-[198px] h-[149px]" />
        <img src={IDS} alt="" className="w-[150px]" />
      </div>
    </Marquee>
  );
};

export default Brand;
