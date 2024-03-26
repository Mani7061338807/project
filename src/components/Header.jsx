import React from "react";
import { MdCall } from "react-icons/md";

import {
  AboutMe,
  Brand,
  ContactUS,
  FaQ,
  Process,
  Project,
  Rating,
  Services,
} from "../Index";
import Navbar from "./Navbar";

const Header = () => {

  return (
    <>
        
      <div className="w-full px-10 overflow-hidden flex header-bg pt-10 h-[500px]  ">
      <div className="md:block w-[40px] hidden ">
         <Navbar type='HEADER' />  
        </div>
        <div className="font-Lato mx-auto">
          <p className="ss:w-[800px] ss:text-[3rem] text-[2rem] text-center font-semibold">
            Transform Your Technology , Accelerate Your Growth
          </p>
          <p className="text-center px-4 mt-4 font-light">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate t
          </p>
          <span className="flex justify-center mt-8">
            <span className=" button flex items-center px-6 py-3 text-lg gap-2 rounded-xl shadow-md shadow-[#8000cf81]">
              <MdCall />
              <button>Book a Discovery Call</button>
            </span>
          </span>
        </div>
        <div className="hidden ss:block w-[200px] h-[200px] text-start absolute -right-[3rem]  bottom-6 border-[40px] border-primary rounded-full z-50 "></div>
      </div>
      <section id="testmobials">
        <Brand />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="services">
        <Services />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Rating />
      </section>
      <section>
        <FaQ />
      </section>
      <section id="contact">
        <ContactUS />
      </section>
    </>
  );
};

export default Header;
