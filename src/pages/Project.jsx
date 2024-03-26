import React from "react";
import { Arrow } from "../assets/Index";
import ProjectImg from "../Data";

const Project = () => {
  return (
    <>
      <span className="brand-container">
        <span className="flex justify-center p-4 ">
          <p className="text-xs font-mountain translate-x-[6rem] rotate-[-25deg] translate-y-1 ">
            Our Recent Work
          </p>
          <img src={Arrow} alt="" className="w-[100px] h-[100px]" />
          <p className="text-2xl font-Lato translate-y-4 ">
            Projects We Delivered
          </p>
        </span>
        <span className="flex justify-center scrolling-wrapper gap-4">
          {ProjectImg.ProjectImg.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt=""
              className="w-[420px] brand-image"
            />
          ))}
        </span>
        <span className="flex justify-center">
          <button className="text-lg px-6 py-2 toggle rounded-xl m-[2rem] mb-[6rem] shadow-lg shadow-[#8000cf81] ">
            View Project
          </button>
        </span>
      </span>
    </>
  );
};

export default Project;
