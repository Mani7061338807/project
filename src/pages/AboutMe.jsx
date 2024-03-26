import React from "react";
import { AboutMeBG } from "../assets/Index";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <div>
        <p className="text-4xl text-white font-medium font-Lato text-center ss:mb-0 mb-[2rem]  ">
          About Us
        </p>
        <span className="flex flex-col ss:flex-row ss:p-[2rem] ss:gap-[2rem]  ">
          <span className="ss:w-[50%] w-full order-2 ss:order-1 flex flex-col justify-center items-center mt-[4rem] ">
            <p className="p-6  font-Lato  ">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available. In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface without relying on meaningful content. Lorem ipsum may be
              used as a placeholder before the final copy is available.
            </p>
            <Link to="/members">
              <button className="button px-6 py-3  text-lg font-Lato rounded-xl mx-auto  shadow-md shadow-[#8000cf81] ">
                View Team Members
              </button>
            </Link>
          </span>
          <span className="ss:w-[50%] w-full order-1 ss:order-2  ">
            <img
              src={AboutMeBG}
              alt=""
              className="ss:w-[750px] w-full ss:h-[500px] h-auto"
            />
          </span>
        </span>
      </div>
    </>
  );
};

export default AboutMe;
