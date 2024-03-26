import React, { useState } from "react";
import { ServiceImg1 } from "../assets/Index";

const Services = () => {
  const [activeTab, setActiveTab] = useState("ui-ux");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabContent = {
    "ui-ux": {
      title: "UI/UX Designing",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is Lo",
      image:
        "https://media.istockphoto.com/id/1007097624/vector/ux-design.jpg?s=612x612&w=0&k=20&c=EtX0C49-cFMlQiubcIZbQtrMsjuetOprzFAkanz1Q-8=",
    },
    "web-dev": {
      title: "Web Development",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is Lo",
      image:
        "https://media.istockphoto.com/id/1406684959/vector/modern-3d-illustration-of-young-man-programming-concept.jpg?s=612x612&w=0&k=20&c=2l3e_tuADe6trKO-mWTDGN0LF4KJNhqEO8FR8nZgE7g=",
    },
    "mobile-dev": {
      title: "Mobile Development",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. In publishing and graphic design, Lorem ipsum is Lo",
      image:
        "https://media.istockphoto.com/id/1351107099/photo/cartoon-hand-holding-smartphone-on-blue-background.jpg?s=612x612&w=0&k=20&c=vUul4cu3w0LMd7Fv0YE5vi6n5KIA5jAe1eB5eT_QUmI=",
    },
  };

  return (
    <>
      <span>
        <p className="text-4xl font-Lato text-center p-[4rem] mb-4">Services</p>
        <span className="w-full flex justify-center items-center ">
          <span className="ss:w-[70%] w-full ">
            <span className="flex gap-0 justify-between items-center cursor-pointer">
              <p
                onClick={() => handleTabClick("ui-ux")}
                className={`ss:text-lg text-xs ss:px-6 px-4 ss:py-2 py-1 m-2 uppercase font-Lato rounded-xl shadow-black shadow-sm ${
                  activeTab === "ui-ux" ? "toggle border" : ""
                }`}
              >
                UI/UX Designing
              </p>

              <p
                onClick={() => handleTabClick("web-dev")}
                className={`ss:text-lg text-xs  ss:px-6 px-4 ss:py-2 py-1 m-2 uppercase font-Lato rounded-xl shadow-black shadow-sm${
                  activeTab === "web-dev" ? " toggle border  " : ""
                }`}
              >
                Web Development
              </p>
              <p
                onClick={() => handleTabClick("mobile-dev")}
                className={`ss:text-lg text-xs  ss:px-6 px-2 ss:py-2 py-1 m-2 uppercase font-Lato rounded-xl shadow-black shadow-sm${
                  activeTab === "mobile-dev" ? " toggle border" : ""
                }`}
              >
                Mobile Development
              </p>
            </span>
            <div className="flex md:flex-row flex-col m-8 md:gap-[8rem] gap-0 shadow-black shadow-sm rounded-2xl">
              <img
                src={tabContent[activeTab].image}
                alt=""
                className="md:w-[400px] w-auto  m-6  rounded-xl"
              />
              <div className="flex justify-center items-center">
                <p className="text-lg font-Lato ss:p-4 p-4 ss:-ml-[8rem]">
                  {tabContent[activeTab].description}
                </p>
              </div>
            </div>
          </span>
        </span>
      </span>
    </>
  );
};

export default Services;
