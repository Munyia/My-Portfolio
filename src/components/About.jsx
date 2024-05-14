import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import {bg2} from "../assets/res"

const About = () => {
  return (
    <div className="relative flex h-screen overflow-hidden scroll-m-0">
      <img className="absolute inset-0 w-full h-full object-cover z-0" src={bg2} alt="" />
      <div className="relative z-10 w-full">
        <Navbar />
        <div className="flex h-full">
          <Contact />
          <div className="flex w-full justify-center items-center relative">
            <div className="w-[85%] mb-14 flex flex-col gap-3 justify-center items-center text-white ">
              <p>Hello, I'm Amaranjo Ndidi Vivian, a passionate Full Stack JavaScript Web Developer based in Abuja, Nigeria. With a background in Geography and Environment from Imo State University, I bring a unique blend of analytical thinking and creative problem-solving skills to the world of web development.</p>
              <p>As a Full Stack JavaScript Developer, I specialize in building robust and dynamic web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). My journey into web development began with comprehensive technical training at GoMyCode, where I honed my skills in frontend technologies like React.js, JavaScript, Tailwind CSS, HTML, and CSS, ensuring responsive and intuitive user interfaces.</p>
              <p>During my time at GoMyCode, I delved into backend development, mastering Node.js and Express.js to create scalable APIs and integrate complex database solutions with MongoDB. Through hands-on projects, I gained expertise in implementing CRUD operations, authentication, and authorization mechanisms, ensuring data security and integrity in web applications.</p>
              <p>Prior to my transition into tech, I gained valuable leadership and project management experience while working as a Supervisor at Magic City. There, I led a team of staff members, implemented performance management strategies, and leveraged data analytics tools like Google Analytics to drive informed decision-making and optimize business processes.</p>
              <p>Additionally, my background in urban planning as an Urban Planner at Blue Libra Concept equipped me with research and analytical skills, which I apply to understand user behavior and design user-centric web experiences.</p>
              <p>I'm committed to continuous learning and professional growth, staying updated with the latest technologies and industry trends. When I'm not coding, you can find me exploring new technologies, collaborating on open-source projects, or enjoying outdoor adventures.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
