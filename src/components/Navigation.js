import logo from "../images/logo.svg";
import React from "react";
import { motion } from "framer-motion";

const NavigationBar = () => {
  return (
    <>
      <nav className=" z-50 bg-black shadow dark:bg-orange-800  w-full  ">
        <div
          className="container
       px-5 py-5 mx-auto md:flex md:justify-between md:items-center"
        >
          <motion.div
            className="px-3 py-3"
            whileHover={{
              scale: 1.3,
            }}
          >
            <a className="text-xl " href="/">
              <img alt="a logo" className=" navLogo w-full" src={logo} />
            </a>
          </motion.div>
        </div>
      </nav>
      <div
        className=" 
       px-2 py-6    bg-orange-600 w-full"
      ></div>
    </>
  );
};

export default NavigationBar;
