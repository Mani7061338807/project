import React from "react";
import { One, Two, Three, Four, Five, Six, Arrow2 } from "../assets/Index";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Process = () => {
  return (
    <>
      <span className="flex flex-col  scrolll mb-[4rem]  ">
        <p className="text-3xl font-Lato text-center p-[4rem]">Process</p>
        <span className="flex gap-[4rem] m-4 w-full overflow-x-scroll ">
          <span className="w-full flex gap-4 ">
            <span className="flex gap-4  items-center">
              <span className="">
                <img src={One} alt="" className=" h-[200px]" />
                <p className="text-2xl font-Lato -translate-y-[4rem]">
                  Innovative Approach
                </p>
                <p className=" font-Lato  w-[200px] -translate-y-[3.5rem]">
                  We bring fresh perspectives to every project.
                </p>
              </span>
              <img
                src={Arrow2}
                alt=""
                className="h-[10px] -translate-y-8 -translate-x-[6rem] "
              />
            </span>
            <span className="flex gap-4  items-center">
              <span className="">
                <img src={Two} alt="" className=" h-[230px]" />
                <p className="text-2xl font-Lato -translate-y-[6rem]">
                  Proven Expertise
                </p>
                <p className=" font-Lato  w-[200px] -translate-y-[5.5rem]">
                  With a seasoned team of creative minds
                </p>
              </span>
              <img
                src={Arrow2}
                alt=""
                className="h-[10px] -translate-y-8 -translate-x-[4rem] "
              />
            </span>
            <span className="flex gap-4  items-center">
              <span className=" ">
                <img src={Three} alt="" className=" h-[200px]" />
                <p className="text-2xl font-Lato -translate-y-[4rem]">
                  Client - Centric Approach
                </p>
                <p className=" font-Lato  w-[200px] -translate-y-[3.5rem]">
                  Your satisfaction is our priority.
                </p>
              </span>
              <img
                src={Arrow2}
                alt=""
                className="h-[10px] -translate-y-8 -translate-x-[3rem] "
              />
            </span>
            <span className="flex gap-4  items-center">
              <span className="ml-[3rem]">
                <img src={Four} alt="" className=" h-[200px]" />
                <p className="text-2xl font-Lato -translate-y-[4rem]">
                  Innovative Approach
                </p>
                <p className=" font-Lato  w-[200px] -translate-y-[3.5rem]">
                  We bring fresh perspectives to every project.
                </p>
              </span>
              <img
                src={Arrow2}
                alt=""
                className="h-[10px] -translate-y-10 -translate-x-[3rem] "
              />
            </span>
            <span className="flex gap-4  items-center">
              <span className="ml-[3rem]">
                <img src={Five} alt="" className=" h-[240px]" />
                <p className="text-2xl font-Lato -translate-y-[6rem] translate-x-5">
                  Timely Delevery
                </p>
                <p className=" font-Lato  w-[200px] -translate-y-[5.5rem] translate-x-6">
                  We value your time
                </p>
              </span>
              <img
                src={Arrow2}
                alt=""
                className="h-[10px] -translate-y-8 -translate-x-[1.5rem] "
              />
            </span>
            <span className="flex gap-4  items-center">
              <span className="ml-[4.5rem]">
                <img src={Six} alt="" className=" h-[210px]" />
                <p className="text-2xl font-Lato -translate-y-[4rem]">
                  Tailored Solutions
                </p>
                <p className=" font-Lato  w-[200px] -translate-y-[3.5rem]">
                  No one-size-fits-all here
                </p>
              </span>
            </span>
          </span>
        </span>
      </span>
    </>
  );
};

export default Process;
