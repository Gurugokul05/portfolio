import React from "react";
import { Helmet } from "react-helmet";
import "./Portfolio.css";
const Portfolio = () => {
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
    </div>
  );
};

export default Portfolio;
