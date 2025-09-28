import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className=" min-h-screen bg-[url('/18106012.jpg')] bg-cover bg-center bg-fixed">
        <header className=" flex-wrap w-full flex items-center  justify-between  px-3 py-2  ">
          <Helmet>
            <title>Gurugokul</title>
            <meta
              name="description"
              content="Gurugokul - B.Tech IT student portfolio showcasing skills in React, Firebase, Tailwind, and full-stack projects."
            />
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
            <ul className="absolute top-16 left-0 w-full bg-white/80 backdrop-blur-md shadow-lg flex flex-col items-center gap-4 py-6 z-50 md:hidden transition-all duration-300 ease-in-out"
>
              <li>
                <a href="#">About Me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#project">Project</a>
              </li>
              <li>
                <a href="#contactMe">Contact Me</a>
              </li>
            </ul>
          )}

          <ul className="hidden md:flex md:flex-wrap md:gap-2 sm:space-x-4 md:text-sm sm:text-base md:mt-2 sm:mt-0">
            <li className="p-1 sm:p-2 cursor-pointer hover:text-slate-500 text-lg ">
              <a href="#">About Me</a>
            </li>
            <li className="p-1 sm:p-2 cursor-pointer hover:text-slate-500  text-lg">
              <a href="#skills">Skills</a>
            </li>
            <li className="p-1 sm:p-2 cursor-pointer hover:text-slate-500  text-lg">
              <a href="#project">Project</a>
            </li>
            <li className="p-1 sm:p-2 cursor-pointer hover:text-slate-500  text-lg">
              <a href="#contactMe">Contact Me</a>
            </li>
          </ul>
        </header>

        {/* About Me Section */}
        <div
          className=" text-center mx-5  mt-25 md:text-center md:mx-auto md:mt-36"
          id="aboutme"
        >
          <h1
            className=" text-center mx-2 mt-25 md:text-center md:mx-auto md:mt-36 md:w-5xl"
            data-aos="fade-right"
          >
            <span className="font-bold text-xl md:font-extrabold md:text-6xl">
              Hi, I'm Gurugokul{" "}
            </span>
            <span className="font-medium text-lg md:font-bold md:text-4xl">
              , B.Tech IT student passionate about web development. I build
              user-friendly solutions using React and Firebase, aiming to become
              a full stack developer contributing to impactful projects.
            </span>
          </h1>
        </div>

        {/* img section */}
        <div
          className="h-auto md:mt-20 flex flex-col  bg-inherit m-6 rounded-2xl  justify-center mt-10 sm:mt-20 items-center p-4 sm:p-10 md:flex-row  text-center font-playfair  md:p-0"
          data-aos="fade-left"
        >
          <img
            src="/WhatsApp Image 2025-09-23 at 18.02.17_67974a1d.jpg"
            alt="Gurugokul"
            className=" rounded-full md:h-96 md:rounded-full mb-7   transform hover:scale-110 transition ease-linear duration-300"
          />
        </div>
        {/* end of about */}

        {/* skill */}
        <div className="">
          <h1 className="text-center mb-10 " data-aos="zoom-in">
            <span className="text-center  font-medium text-2xl md:font-bold md:text-4xl ">
              Skills
            </span>
          </h1>
        </div>
        <div
          className="flex  flex-row flex-wrap  gap-4  mx-2 rounded-2xl p-2.5 md:mx-7 "
          id="skills"
        >
          {/* card1 */}
          <div
            data-aos="zoom-in"
            className=" mx-auto md:w-64 bg-stone-100 shadow-2xl p-8 rounded-2xl mt-5 w-40   flex-none text-center  "
          >
            <img
              src="/html-5.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">HTML</span>
            <br />
            <span className="font-semibold  text-center ">Intermediate</span>
          </div>
          {/* card2 */}
          <div
            className="mx-auto  bg-stone-100 p-8 rounded-2xl mt-5 w-40  md:w-64    flex-none text-center shadow-2xl  "
            data-aos="zoom-in"
          >
            <img
              src="/css-3.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">CSS</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
          {/* card3 */}
          <div
            className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40  md:w-64     text-center shadow-2xl  "
            data-aos="zoom-in"
          >
            <img
              src="/programing.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">React</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
          {/* card4 */}
          <div
            className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40  md:w-64     text-center shadow-2xl  "
            data-aos="zoom-in"
          >
            <img
              src="/icons8-tailwind-css-480.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">Tailwind</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>

          {/* card5 */}
          <div
            className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40  md:w-64    text-center shadow-2xl  "
            data-aos="zoom-in"
          >
            <img
              src="/javascript_original_logo_icon_146455.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">JavaScript</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
          {/* card6 */}
          <div
            className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40  md:w-64    text-center shadow-2xl  "
            data-aos="zoom-in"
          >
            <img
              src="/c_original_logo_icon_146611.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">C</span>
            <br />
            <span className="font-semibold  text-center">Basic</span>
          </div>
          {/* card7 */}
          <div
            className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40  md:w-64    text-center shadow-2xl  "
            data-aos="zoom-in"
          >
            <img
              src="/file_type_python_icon_130221.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">Python</span>
            <br />
            <span className="font-semibold  text-center">Basic</span>
          </div>
          {/* card8 */}
          <div
            className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40  md:w-64    text-center shadow-2xl  "
            data-aos="zoom-in"
          >
            <img
              src="/java_original_logo_icon_146458.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">Java</span>
            <br />
            <span className="font-semibold  text-center">Basic</span>
          </div>
          {/* card9 */}
          <div
            className="mx-auto   bg-stone-100 p-8 rounded-2xl mt-5 w-40  md:w-64    flex-none text-center shadow-2xl  "
            data-aos="zoom-in"
          >
            <img
              src="/icons8-firebase-480.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">FireBase</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
          {/* card10 */}
          <div
            className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40  md:w-64    text-center shadow-2xl  "
            data-aos="zoom-in"
          >
            <img
              src="/github.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">GitHub</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
        </div>

        {/* projects */}

        <h1 className="text-center mb-10 mt-10" data-aos="flip-left">
          <span className="text-center font-medium text-2xl md:font-bold md:text-4xl ">
            Projects
          </span>
        </h1>
        <div
          className="flex flex-col m-6 
        "
          data-aos="flip-left"
          id="project"
        >
          <div
            className="mx-auto flex-none md:p-15 bg-stone-100 p-6 rounded-2xl mt-5 w-auto md:w-1/2 text-center shadow-2xl  "
            data-aos="fade-up"
          >
            <img
              src=" /Screenshot 2025-09-26 072852.png"
              alt="html-logo"
              className="w-auto mb-7 mx-auto rounded-2xl "
            />
            <span className="font-semibold md:font-bold md:text-2xl text-center">
              Food Ordering web site
            </span>
            <br />
            <span className="font-light md:font-medium text-right md:text-lg">
              A responsive web application where users can browse menus, add
              items to cart, and place food orders online-similar to platforms
              like Swiggy or Zomato.
            </span>
            <span className="block mt-3 text-xs font-medium md:text-lg text-gray-500">
              <strong>Tech Stack:</strong> React, Firebase, Firestore DB
            </span>
          </div>
        </div>
        {/* Contact me  */}
        <div
          className="mx-8 bg-stone-100 shadow-2xl text-center p-5  rounded-xl md:flex justify-evenly items-center"
          id="contactMe"
          data-aos="fade-up"
        >
          <span className="font-medium text-2xl md:font-bold md:text-4xl">
            Contact Me
          </span>
          <br />
          <br />
          <form action="" className="mt-8">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="md:w-full w-full"
              required
            />
            <br />
            <br />

            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="md:w-full w-full"
              required
            />
            <br />
            <br />
            <Button
              variant="contained"
              className="md:w-full md:h-15"
              onSubmit={() => handleSubmit}
            >
              contact me
            </Button>
            <br />
            <br />
            <span className="text-gray-600 md:text-2xl">
              Feel free to reach out for collaborations, projects, or just to
              connect!
            </span>
          </form>
        </div>
        {/* Footer */}
        <div className="flex flex-row  justify-center items-center text-center mt-10 bg-neutral-600   shadow-2xl p-6">
          <ul className=" md:flex md:flex-wrap md:flex-col md:gap-2 sm:space-x-4 md:text-sm sm:text-base md:mt-2 sm:mt-0">
            <span className="text-amber-50 font-medium text-2xl md:font-bold md:text-6xl">
              GURUGOKUL
            </span>
            <br />
            <br />
            <b></b>
            <li className="text-stone-100 md:text-2xl p-1 sm:p-2 cursor-pointer hover:text-slate-500 text-lg ">
              <a href="#">About Me</a>
            </li>
            <li className="text-stone-100 md:text-2xl p-1 sm:p-2 cursor-pointer hover:text-slate-500  text-lg">
              <a href="#skills">Skills</a>
            </li>
            <li className="text-stone-100 md:text-2xl p-1 sm:p-2 cursor-pointer hover:text-slate-500  text-lg">
              <a href="#project">Project</a>
            </li>
            <li className="text-stone-100 md:text-2xl p-1 sm:p-2 cursor-pointer hover:text-slate-500  text-lg">
              <a href="#contactMe">Contact Me</a>
            </li>
            <br />
            <hr /> <br />
            <div className="flex justify-center">
              <li className="text-stone-100 p-1 sm:p-2 cursor-pointer hover:text-slate-500  text-lg">
                <a href="https://github.com/Gurugokul05">
                  <FaGithub className="text-3xl md:text-5xl hover:text-white hover:scale-110 transition" />
                </a>
              </li>
              <li className="text-stone-100 p-1 sm:p-2 cursor-pointer hover:text-slate-500  text-lg ">
                <a href="https://www.linkedin.com/in/gurugokul-a-a401a5378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedin className="text-3xl md:text-5xl hover:text-white hover:scale-110 transition" />
                </a>
              </li>
              <hr />
              <br />
              <br />
              <br />
            </div>
            <li className="md:text-2xl p-1 sm:p-2  text-center mt-4 text-gray-300 text-sm ">
              © Created by Gurugokul | All rights Reserved
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
