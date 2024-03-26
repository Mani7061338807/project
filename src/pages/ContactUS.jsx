import React from "react";
import { Contact } from "../assets/Index";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { TfiNewWindow } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUS = () => {
  return (
    <>
      <div>
        <p className="text-4xl font-Lato text-center p-[2rem]">Let’s Connect</p>

        <div className="flex ss:ml-[4rem]  items-center ">
          <img src={Contact} alt="" className="hidden ss:block" />
          <div className="contact p-[2rem] ss:m-0 m-4 rounded-3xl font-Roboto ss:w-[50%] w-full  h-[50%]">
            <form action="" className="flex flex-col gap-2 text-white">
              <label htmlFor="firstName">
                First Name <sup className="text-red-700">*</sup>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  className="w-full px-2 py-2 placeholder-white bg-[#ffffff62] rounded-md focus:outline-none"
                />
              </label>

              <span className="flex flex-col items-start">
                <label htmlFor="email" className="">
                  Email Address <sup className="text-red-700">*</sup>
                </label>
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    className="w-full px-2 py-2 placeholder-white bg-[#ffffff62]  rounded-md focus:outline-none"
                  />
                  <MdOutlineEmail className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-xl " />
                </div>
              </span>

              <span className="flex flex-col relative">
                <label htmlFor="mobile" className="">
                  Your Contact Number <sup className="text-red-700">*</sup>
                </label>
                <div className="relative ss:w-[50%] w-full">
                  <input
                    type="mobile"
                    placeholder="Contact Number"
                    id="mobile"
                    className="w-full px-2 py-2 placeholder-white bg-[#ffffff62]  rounded-md focus:outline-none"
                  />
                  <MdOutlinePhoneInTalk className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-2 text-xl " />
                </div>
              </span>

              <label htmlFor="message">Message</label>
              <div className="relative w-full">
                <textarea
                  name="message"
                  id="message"
                  cols=""
                  rows="1"
                  placeholder="Hi! Please write your message here."
                  className="w-full ss:text-lg text-sm px-2 py-2 placeholder-white bg-[#ffffff62] rounded-md focus:outline-none resize-none"
                ></textarea>
                <TfiNewWindow className="absolute bottom-0 right-0 transform rotate-90 mr-2 mb-4 text-xl " />
              </div>
            </form>
            <span className="flex justify-center ">
              <button className="text-lg font-Lato px-6 py-2  rounded-lg button mt-4 shadow shadow-primary">
                Submit
              </button>
            </span>
          </div>
        </div>

        <span className="flex items-center flex-col gap mt-[4rem] mb-8">
          <p className="ss:text-3xl  text-xl">
            Fuel Your Brand’s Goals with Us
          </p>
          <span className=" flex items-center gap-2 px-8 py-2 toggle m-4 rounded-xl shadow-md shadow-[#8000cf81]">
            <FaPhoneAlt />
            <button className="text-xl font-Lato">Book a Discovery Call</button>
          </span>
        </span>
      </div>
    </>
  );
};

export default ContactUS;
