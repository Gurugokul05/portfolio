import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className=" min-h-screen bg-[url('public/18106012.jpg')] bg-cover bg-center bg-fixed">
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
          <h1 className=" text-center mx-2 mt-25 md:text-center md:mx-auto md:mt-36 md:w-5xl">
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
        <div className="h-auto md:mt-20 flex flex-col  bg-inherit m-6 rounded-2xl  justify-center mt-10 sm:mt-20 items-center p-4 sm:p-10 md:flex-row  text-center font-playfair  md:p-0">
          <img
            src="public/WhatsApp Image 2025-09-23 at 18.02.17_67974a1d.jpg"
            alt="Gurugokul"
            className=" rounded-full md:h-96 md:rounded-full mb-7 animate-[var(--animate-pop-up)] transform hover:scale-110 transition ease-linear duration-300"
          />
        </div>
        {/* end of about */}

        {/* skill */}
        <h1 className="text-center mb-10 ">
          <span className="text-center font-medium text-2xl md:font-bold md:text-4xl ">
            Skills
          </span>
        </h1>
        <div
          className="flex  flex-row flex-wrap md:flex-nowrap gap-4  mx-2 rounded-2xl p-2.5 md:mx-7 "
          id="skills"
        >
          {/* card1 */}
          <div data-aos="fade" className=" mx-auto  bg-stone-100 shadow-2xl p-8 rounded-2xl mt-5 w-40 md:w-68 animate-[var(--animate-pop-up)] flex-none text-center hover:scale-105 transition-transform duration-300">
            <img
              src="public/html-5.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">HTML</span>
            <br />
            <span className="font-semibold  text-center ">Intermediate</span>
          </div>
          {/* card2 */}
          <div className="mx-auto  bg-stone-100 p-8 rounded-2xl mt-5 w-40 md:w-68  animate-[var(--animate-pop-up)] flex-none text-center shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="public/css-3.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">CSS</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
          {/* card3 */}
          <div className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40 md:w-68  animate-[var(--animate-pop-up)]  text-center shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="public/programing.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">React</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
          {/* card4 */}
          <div className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40 md:w-68  animate-[var(--animate-pop-up)]  text-center shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="public/icons8-tailwind-css-480.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">Tailwind</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
          
          {/* card5 */}
           <div className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40 md:w-68   text-center shadow-2xl hover:scale-105 transition-transform duration-300" data-aos="slide-right">
            <img
              src="public/javascript_original_logo_icon_146455.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">JavaScript</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
          {/* card6 */}
           <div className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40 md:w-68   text-center shadow-2xl hover:scale-105 transition-transform duration-300" data-aos="slide-right">
            <img
              src="public/c_original_logo_icon_146611.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">C</span>
            <br />
            <span className="font-semibold  text-center">Basic</span>
          </div>
          {/* card7 */}
           <div className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40 md:w-68   text-center shadow-2xl hover:scale-105 transition-transform duration-300" data-aos="slide-right">
            <img
              src="public/file_type_python_icon_130221.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">Python</span>
            <br />
            <span className="font-semibold  text-center">Basic</span>
          </div>
          {/* card8 */}
           <div className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40 md:w-68   text-center shadow-2xl hover:scale-105 transition-transform duration-300" data-aos="slide-right">
            <img
              src="public/java_original_logo_icon_146458.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">Java</span>
            <br />
            <span className="font-semibold  text-center">Basic</span>
          </div>
          {/* card9 */}
          <div className="mx-auto   bg-stone-100 p-8 rounded-2xl mt-5 w-40 md:w-68  animate-[var(--animate-pop-up)] flex-none text-center shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="public/icons8-firebase-480.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">FireBase</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
          {/* card10 */}
          <div className="mx-auto flex-none  bg-stone-100 p-8 rounded-2xl mt-5 w-40 md:w-68   text-center shadow-2xl hover:scale-105 transition-transform duration-300" data-aos="slide-right">
            <img
              src="public/github.png"
              alt="html-logo"
              className="w-25 mb-3 mx-auto"
            />
            <span className="font-bold  text-center">GitHub</span>
            <br />
            <span className="font-semibold  text-center">Intermediate</span>
          </div>
        </div>

        {/* projects */}

        <h1 className="text-center mb-10 mt-10">
          <span className="text-center font-medium text-2xl md:font-bold md:text-4xl ">
            Projects
          </span>
        </h1>
        <div
          className="flex flex-col m-6 
        "
          id="project"
        >
         <div
  className="mx-auto flex-none md:p-15 bg-stone-100 p-6 rounded-2xl mt-5 w-auto md:w-1/2 text-center shadow-2xl hover:scale-105 transition-transform duration-300"
  data-aos="fade-up"
>
            <img
              src="public/Screenshot 2025-09-26 072852.png"
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
      </div>
    </div>
  );
};

export default Portfolio;
