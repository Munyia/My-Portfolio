import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const Home = () => {
  
  return (
    <div className="relative flex flex-col pt-[5%] h-screen overflow-hidden scroll-m-0">
      <img className="absolute inset-0 w-full h-full object-cover z-0" src={bg3} alt="" />
      <div className="relative z-10 w-full bg-[rgba(0,0,0,0.5)] h-full">
        <Navbar />
        <div className="flex flex-col ml-[15%]  overflow-y-auto h-full pt-16">
        <section
            className="flex w-fulljustify-center items-center relative"
          >
            <div className="w-[85%] mb-14 flex flex-col ml-[7%] text-2xl font-extralight  gap-3 justify-center   text-white">
              <p className="item-center font-bold flex justify-center">
                Education
              </p>
              <div className=" flex gap-2 flex-col pb-3">
                <p className="item-center font-bold flex justify-center">
                  Technical Training
                </p>
                <p className="mb-5  font-bold ">Gomycode Abuja</p>
                <div className="flex font-bold  justify-between">
                  <p>Full-Stack JavaScript Development Program</p>
                  <p>2023 - 2024</p>
                </div>
                <li>
                  Completed an intensive full-stack JavaScript development
                  program at Gomycode Abuja. Acquired hands-on experience and
                  expertise in modern web development technologies and
                  frameworks, including:
                </li>
                <li>
                  HTML/CSS: Developed skills in creating responsive and visually
                  appealing user interfaces.
                </li>
                <li>
                  Tailwind CSS: Mastered Tailwind CSS for streamlined and
                  efficient styling in web development
                </li>
                <li>
                  JavaScript: Mastered the fundamentals of JavaScript
                  programming language, enabling dynamic and interactive web
                  experiences.
                </li>
                <li>
                  Node.js & Express.js: Explored backend development using
                  Node.js runtime and Express.js framework to create robust
                  server-side applications.
                </li>
                <li>
                  MongoDB: Gained proficiency in MongoDB, a NoSQL database, for
                  storing and managing data in web applications.
                </li>
                <li>
                  React.js: Learned React.js library for building efficient and
                  scalable frontend applications.
                </li>
              </div>
              <div>
                <p className="item-center mb-5  font-bold  flex justify-center">
                  Professional Training
                </p>
                <p className="mb-5 font-bold  ">
                  Clemads Global Consulting Ltd
                </p>
                <div className="flex font-bold justify-between mb-5">
                  <li className="">Human Resource Management</li>
                  <p>2021</p>
                </div>
                <p>
                  Acquired comprehensive knowledge and skills in managing human
                  resources effectively, including recruitment, training,
                  performance evaluation, and employee relations.
                </p>
                <div className="flex font-bold justify-between mb-5">
                  <li>International Relations & Diplomacy</li>
                  <p>2021</p>
                </div>
                <p>
                  Explored the dynamics of international relations and
                  diplomacy, understanding the complexities of global politics,
                  economic interactions, and diplomatic negotiations.
                </p>
                <div className="flex font-bold justify-between mb-5">
                  <li>Project Management</li>
                  <p>2021</p>
                </div>
                <p>
                  Learned essential project management methodologies and
                  techniques to initiate, plan, execute, monitor, and close
                  projects successfully, ensuring project goals are met within
                  scope, time, and budget constraints.
                </p>
              </div>
              <div>
                <div className="item-center font-bold flex justify-between">
                  <p className="mt-7 mb-3">Imo State University</p>
                  <p>BSc.</p>
                </div>
                <div className="flex font-bold justify-between my-5">
                  <p>
                    Bachelor of Science (BSc) in Geography & Environmental
                    Management
                  </p>
                  <p>2014 - 2018</p>
                </div>
                <p>
                  Studied and specialized in Geography and Environmental
                  Management, gaining insights into the complex relationship
                  between human societies and the natural environment. Developed
                  analytical skills to assess environmental issues and propose
                  sustainable solutions.
                </p>
              </div>
            </div>
          </section>
        
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
