import React from "react";
import LeadMembers from "../Data";
import CoreMembers from "../Data";
import Navbar from "./Navbar";

const Members = () => {

  return (
    <>
      <div>
        <p className="text-3xl font-Lato font-medium text-center p-[2rem]">
          Lead Members
        </p>

        <div className=" w-[180px] ss:block  hidden  mt-[4rem] ml-4 absolute top-[4rem]">
        <Navbar type='HEADER' /> 
        </div>

        <div className="grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:p-[2rem]  ss:p-0">
          {LeadMembers.LeadMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center gap-2 p-4"
            >
              <img src={member.src} alt="" />
              <p className="text-xl font-Lato">{member.title}</p>
              <p className="text-lg font-Lato px-[2rem]">{member.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-3xl font-Lato font-medium text-center p-[2rem]">
          Core Team Members
        </p>
        <div className="grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:p-[2rem] ss:p-0">
          {CoreMembers.CoreMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center gap-2 p-4"
            >
              <img src={member.src} alt="" />
              <p className="text-xl font-Lato">{member.title}</p>
              <p className="text-lg font-Lato px-[2rem]">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Members;
