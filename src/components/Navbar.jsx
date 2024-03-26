import React, { useEffect, useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaAddressCard, FaMobileScreenButton } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Toggle from "./Toggle";

const Navbar = ({type = 'NAVBAR'}) => {
  const location = useLocation();
  const [activePath, setActivePath] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [isNavIcon, setNavIcon] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {isNavIcon ? (
        <div className="w-[50px]">
          <Toggle setNavIcon={setNavIcon} />
        </div>
      ) : (
        <div>
          <div
            className={`navbar backdrop-filter backdrop-blur-lg p-2   rounded-xl font-Lato border border-[#ffffff36] 
         ${
           showMenu
             ? "-translate-x-[10rem] duration-700 ease-in-out ss:translate-x-0 absolute z-50  "
             : "translate-x-[10rem] duration-700 ease-in-out ss:translate-x-0 absolute z-50  "
         }`}
          >
            <ul
              className={` font-Lato flex flex-col relative`}
            >
              <RxCross2
                className=" translate-x-[8rem] bg-red text-2xl text-end cursor-pointer"
                onClick={() => {
                  if(type === 'HEADER'){
                    setNavIcon(true)
                  }
                  else setNavIcon(false)
                  toggleMenu();
                }}
              />
              <Link
                to="/"
                className={`flex items-center  gap-2 px-4  m-2 py-1   rounded-lg ${
                  activePath === "/"
                    ? " bg-primary  rounded-lg hover:opacity-80"
                    : ""
                }`}
              >
                <MdHomeFilled />
                <p>Home</p>
              </Link>
              <a
                href="#about"
                className={`flex items-center  gap-2 px-4  m-2 py-1   rounded-lg${
                  activePath === "/#about"
                    ? " bg-primary   hover:opacity-80"
                    : ""
                }`}
              >
                <FaAddressCard />
                <p>About</p>
              </a>
              <a
                href="#services"
                className={`flex items-center  gap-2 px-4  m-2 py-1   rounded-lg${
                  activePath === "/#about"
                    ? " bg-primary   hover:opacity-80"
                    : ""
                }`}
              >
                <FaAddressCard />
                <p>Services</p>
              </a>
              <Link
                to="/portfolio"
                className={`flex items-center  gap-2 px-4  m-2 py-1   rounded-lg${
                  activePath === "/#about"
                    ? " bg-primary   hover:opacity-80"
                    : ""
                }`}
              >
                <FaMobileScreenButton />
                <p>PortFolio</p>
              </Link>
              <a
                href="#testmobials"
                className={`flex items-center  gap-2 px-4  m-2 py-1   rounded-lg${
                  activePath === "/#about"
                    ? " bg-primary   hover:opacity-80"
                    : ""
                }`}
              >
                <FaMobileScreenButton />
                <p>TestMonials</p>
              </a>
              <a
                href="#contact"
                className={`flex items-center  gap-2 px-4  m-2 py-1   rounded-lg${
                  activePath === "/#about"
                    ? " bg-primary   hover:opacity-80"
                    : ""
                }`}
              >
                <FaMobileScreenButton />
                <p>Contact</p>
              </a>
            </ul>
          </div>
          <GiHamburgerMenu
            className={`text-3xl  block md:hidden cursor-pointer absolute right-[0.5rem] top-[2.5rem]    ${
              !showMenu ? "block" : "hidden"
            }`}
            onClick={toggleMenu}
          />
          {/* {showMenu && (
            <span
              className="text-3xl absolute right-4 top-[2.5rem] cursor-pointer"
              onClick={toggleMenu}
            >
              <RxCross2 />
            </span>
          )} */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
