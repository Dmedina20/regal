import logo from "../images/logo.svg";
import React from "react";

const NavigationBar = () => {
  return (
    <>
      <nav className=" z-50 bg-#121212 shadow dark:bg-orange-800  w-full  ">
        <div
          className="container
       px-5 py-5 m-auto flex justify-center items-center lg:justify-between lg:mx-auto"
        >
          <div className="px-3 py-3">
            <a className="text-xl " href="/">
              <img alt="a logo" className=" navLogo w-full" src={logo} />
            </a>
          </div>
        </div>
      </nav>
      <div
        className=" 
       px-2 py-6  bg-orange-500 w-full"
      ></div>
    </>
  );
};

export default NavigationBar;
