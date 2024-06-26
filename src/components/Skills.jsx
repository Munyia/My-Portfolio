import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // Delay to ensure smooth transition after component mounts

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="relative flex flex-col pt-[5%] h-screen overflow-hidden scroll-m-0">
      <img className="absolute inset-0 w-full h-full object-cover z-0" src={bg3} alt="" />
      <div className="relative z-10 w-full bg-[rgba(0,0,0,0.5)] h-full">
        <Navbar />
        <div className="flex flex-col ml-[15%]  overflow-y-auto h-full pt-16">
        <section
            className="flex w-full  justify-center items-center relative "
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight   gap-3 justify-center items-center text-white">
            <div className={`transform transition-transform duration-1000 ease-in-out ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <p className="item-center font-bold flex justify-center">
             Skills
              </p>
              <div className="flex gap-5 flex-col">
                <div>
                <p className="font-bold">Frontend</p>
                <p>I specialize in creating dynamic and responsive user interfaces using the latest frontend technologies:</p>
                </div>
                <div className="mb-5">
                <ul className="flex flex-col gap-3">
                  <li> <span className="font-bold">React.js:</span> Building interactive and efficient web applications with a focus on performance and scalability.</li>
                  <li><span  className="font-bold">JavaScript:</span> Utilizing modern JavaScript (ES6+) to develop robust and maintainable code.</li>
                  <li><span className="font-bold">Tailwind CSS:</span> Crafting responsive and aesthetically pleasing designs with a utility-first CSS framework.</li>
                  <li><span  className="font-bold">HTML & CSS: </span>Building structured and styled web pages with fundamental web technologies.</li>
                  <li><span className="font-bold">Bootstrap: </span>Rapidly developing responsive layouts and components with this popular CSS framework.</li>
                  <li><span className="font-bold">Responsive Designs:</span> Ensuring optimal user experience across various devices and screen sizes</li>
                </ul>
                </div>
                <div className="mb-5">
                  <ul className="flex flex-col gap-3">
                    <p  className="font-bold">Backend</p>
                    <p> My backend development skills enable me to build secure, scalable, and efficient server-side applications:</p>
                    <p><span className="font-bold">Node.js:</span> Developing server-side logic with a non-blocking, event-driven architecture.</p>
                    <p> <span className="font-bold">ExpressJS: </span> Creating robust RESTful APIs and handling server-side routing with this flexible web application framework.</p>
                    <p> <span className="font-bold"> MongoDB:</span> Managing data with a NoSQL database that offers high performance and flexibility.</p>
                    <p> <span className="font-bold">MySQL: </span>  Using a relational database management system to handle structured data efficiently.</p>
                    <p> <span className="font-bold">Restful APIs: </span>  Designing and implementing APIs that follow REST principles for seamless client-server interactions.</p>
                    <p> <span className="font-bold">Authentication & Authorization: </span> Implementing secure user authentication and authorization mechanisms to protect application data.</p>
                  </ul>
                </div>
                <div className="mb-5">
                  <ul className="flex flex-col gap-3">
                    <p  className="font-bold">Soft Skills</p>
                    <p>My soft skills complement my technical expertise, enabling effective project execution and collaboration:</p>
                    <p><span className="font-bold">Project Management: </span> Leading projects from inception to completion, ensuring timely delivery and quality.</p>
                    <p> <span className="font-bold">Communication:  </span> Clearly conveying ideas and collaborating effectively with team members and stakeholders.</p>
                    <p> <span className="font-bold"> Leadership</span> Guiding and motivating teams to achieve common goals and fostering a collaborative work environment.</p>
                    <p> <span className="font-bold">Time Management: </span>  Prioritizing tasks and managing time efficiently to meet deadlines and project milestones.</p>
                    <p> <span className="font-bold">Adaptability: </span> Quickly adjusting to new technologies and changing project requirements with ease.</p>
                    <p> <span className="font-bold">Organization: </span>  Maintaining structured workflows and organized codebases to enhance productivity and maintainability.</p>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </section>
        
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Skills;
