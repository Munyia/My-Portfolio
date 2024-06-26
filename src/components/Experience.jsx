import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const Experience = () => {
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
            className="flex w-full justify-center items-center relative "
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-3 justify-center items-center text-white">
            <div className={`transform transition-transform duration-1000 ease-in-out ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <p className="item-center mb-5 font-bold flex justify-center">
                Experience
              </p>
              <div className="flex mb-5 flex-col gap-3">
                <p className="flex font-bold ">
                  FullStack JavaScript Web Developer/Student
                </p>
                <div className="flex justify-between">
                  <p className="flex font-bold ">GoMyCode, Wuse 2, Abuja</p>
                  <p className="flex font-bold ">Dec 2023 – Apr 2024</p>
                </div>
                <li>
                  MERN Stack Proficiency: Developed a comprehensive
                  understanding of web development principles and techniques,
                  specializing in the MERN stack (MongoDB, Express.js, React,
                  Node.js). Implemented CRUD operations in a book web
                  application, ensuring efficient data management.
                </li>
                <li>
                  Responsive UI Development: Skilled in crafting responsive and
                  user-friendly UI components using React, ensuring optimal user
                  experience across various devices. Leveraged Tailwind CSS for
                  rapid and efficient styling, maintaining a consistent and
                  visually appealing design.
                </li>
                <li>
                  Backend API Development: Experienced in developing scalable
                  backend APIs with Express.js and Node.js. Employed RESTful
                  principles to facilitate efficient data communication and
                  ensure smooth integration with frontend components.
                </li>
                <li>
                  Design Implementation: Proficient in translating Figma designs
                  into functional web interfaces, adhering closely to design
                  specifications and user requirements. Ensured that the final
                  product was both visually appealing and highly functional.
                </li>
                <li>
                  Code Quality and Best Practices: Dedicated to maintaining high
                  code quality and following best practices in software
                  development. Embraced clean code principles, version control
                  with Git, and rigorous testing methodologies to deliver robust
                  and maintainable applications.
                </li>
              </div>
              <div className="flex mb-5  flex-col gap-3">
                <p className="flex font-bold ">Supervisor</p>
                <div className="flex justify-between">
                  <p className="flex font-bold ">Magic City, Wuse 2, Abuja</p>
                  <p className="flex font-bold ">Mar 2021 – Apr 2022</p>
                </div>

                <li>
                  Team Leadership: Supervised a team of staff members, providing
                  guidance and direction to ensure efficient and effective task
                  completion. Fostered a collaborative environment that
                  encouraged team members to excel.
                </li>
                <li>
                  Performance Management: Implemented performance management
                  strategies to monitor and evaluate employee performance.
                  Fostered a culture of accountability and excellence through
                  regular feedback and performance reviews.
                </li>
              </div>
              <div>
                <p className="flex mb-5  flex-col gap-3">Urban Planner</p>
                <div className="flex justify-between">
                  <p className="flex font-bold ">
                    Blue Libra Concept, Katampe, Abuja
                  </p>
                  <p className="flex font-bold ">Jan 2020 – Dec 2021</p>
                </div>
                <li>
                  Site Work and Research Support: Supported site work and urban
                  planning research activities. Assisted in data collection,
                  site assessments, and surveying, contributing valuable
                  insights to planning projects.
                </li>
                <li>
                  Research and Analysis: Conducted urban planning research and
                  analysis, providing detailed reports and recommendations.
                  Assisted in the preparation of planning reports and documents,
                  contributing to the successful completion of planning
                  projects.
                </li>
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

export default Experience;
