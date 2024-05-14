import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const Skills = () => {
  return (
    <div className="relative flex h-screen overflow-hidden scroll-m-0">
    <img className="absolute inset-0 w-full h-full object-cover z-0" src={bg3} alt="" />
    <div className="relative z-10 w-full bg-[rgba(0,0,0,0.5)]">
      <Navbar />
      <div className="flex h-full">
        <Contact />
        <div className="flex w-full justify-center items-center relative">
          <div className="w-[85%] mb-14 text-2xl flex flex-col gap-3 justify-center items-center text-white ">         
          <h1 className="textfont-bold mb-6">Skills</h1>       
              <div className="w-full">
                <h2 className="text font-bold mb-4 flex items-center">
                  Frontend Development
                </h2>
                <p>
                  Proficient in building dynamic and responsive user interfaces using:
                  <br />
                  • React.js
                  <br />
                  • JavaScript
                  <br />
                  • Tailwind CSS
                  <br />
                  • HTML
                  <br />
                  • CSS
                  <br />
                  • Bootstrap
                  <br />
                  • Responsive Designs
                </p>
              </div>
              
              <div className="w-full">
                <h2 className="text font-bold mt-6 mb-4 flex items-center">
                  Backend Development
                </h2>
                <p>
                  Skilled in developing scalable and secure backend solutions with:
                  <br />
                  • Node.js
                  <br />
                  • Express.js
                  <br />
                  • MongoDB
                  <br />
                  • MySQL
                  <br />
                  • RESTful APIs
                  <br />
                  • Authentication & Authorization
                </p>
              </div>

              <div className="w-full">
                <h2 className=" font-bold mt-6 mb-4 flex items-center">
                  Soft Skills
                </h2>
                <p>
                  Demonstrated proficiency in essential soft skills, including:
                  <br />
                  • Project Management
                  <br />
                  • Communication
                  <br />
                  • Leadership
                  <br />
                  • Time Management
                  <br />
                  • Adaptability
                  <br />
                  • Organization
                </p>
              </div>

              <div className="w-full">
                <h2 className=" font-bold mt-6 mb-4 flex items-center">
                  Tools & Platforms
                </h2>
                <p>
                  Experienced in using various development tools and platforms such as:
                  <br />
                  • Postman
                  <br />
                  • Render
                  <br />
                  • Vercel
                  <br />
                  • Git & GitHub
                  <br />
                  • Visual Studio Code
                  <br />
                  • Sublime Text
                </p>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills