import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Helmet } from "react-helmet";
import { Menu, X } from "lucide-react";

import "./Portfolio.css";
const Portfolio = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (

    <div>
      <header class="flex bg-amber-100 justify-between align-middle">
        <Helmet>
          <title>Gurugokul</title>
        </Helmet>
        <h1 class="text-5xl p-2 mt-1.5" >Gurugokul</h1>
        <ul class="p-6 flex ">
          <li class="p-2 cursor-pointer hover:text-gray-500" >About Me</li>
          <li class="p-2 cursor-pointer hover:text-gray-500">Skills</li>
          <li class="p-2 cursor-pointer hover:text-gray-500">Project</li>
          <li class="p-2 cursor-pointer hover:text-gray-500">Contact Me</li>
        </ul>
      </header>
    <div className=" h-screen bg-[url('public/9724360-abstract-wallpaper.jpg')] bg-cover bg-center bg-fixed">
      <header className=" flex-wrap w-full flex items-center  justify-between  px-3 py-2  ">
        <Helmet>
          <title>Gurugokul</title>
        </Helmet>

        <h1 className=" text-2xl text-center sm:text-4xl md:text-5xl font-bold text-gray-800 tracking-wide p-4">
          GURUGOKUL
        </h1>

        <button
          className="md:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {showMenu ? <X size={28} /> : <Menu size={28} />}
        </button>

        {showMenu && (
          <ul className="absolute top-16 left-0 w-full bg-neutral-50 flex flex-col items-center space-y-4 py-4 md:hidden">
            <li>
              <a href="">About me</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Contact Me</a>
            </li>
          </ul>
        )}

        <ul className="hidden md:flex md:flex-wrap md:gap-2 sm:space-x-4 md:text-sm sm:text-base md:mt-2 sm:mt-0">
          <li className="p-1 sm:p-2 cursor-pointer hover:text-slate-700 text-lg">
            <a href=""></a>
            About Me
          </li>
          <li className="p-1 sm:p-2 cursor-pointer hover:text-slate-700  text-lg">
            Skills
          </li>
          <li className="p-1 sm:p-2 cursor-pointer hover:text-slate-700  text-lg">
            Project
          </li>
          <li className="p-1 sm:p-2 cursor-pointer hover:text-slate-700  text-lg">
            Contact Me
          </li>
        </ul>
      </header>

      {/* About Me Section */}
      <div className=" text-center mx-5  mt-25 md:text-center md:mx-auto md:mt-36">
        <h1 className=" text-center mx-2 mt-25 md:text-center md:mx-auto md:mt-36 md:w-5xl">
          <span className="font-bold text-xl md:font-extrabold md:text-6xl">Hi, I'm Gurugokul </span>
          <span className="font-medium text-lg md:font-bold md:text-4xl">
            , B.Tech IT student passionate about web development. I build
            user-friendly solutions using React and Firebase, aiming to become a
            full stack developer contributing to impactful projects.
          </span>
        </h1>
      </div>
     
      {/* img section */}
      <div className="h-auto md:mt-20 flex flex-col  bg-inherit m-6 rounded-2xl  justify-center mt-10 sm:mt-20 items-center p-4 sm:p-10 md:flex-row  text-center font-playfair  md:p-0">
        <img
          src="public/WhatsApp Image 2025-09-23 at 18.02.15_8f16131e.jpg"
          alt="Gurugokul"
          className=" rounded-full md:h-96 md:rounded-full mb-7 animate-[var(--animate-pop-up)] transform hover:scale-110 transition ease-linear duration-300"
        />
      </div>
      {/* end of about */}
      

      {/* skill */}
      <div>
        
      </div>

    </div>
    </div>
  );
};

export default Portfolio;
