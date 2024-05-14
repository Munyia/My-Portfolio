import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const Experience = () => {
  return (
    <div className="relative flex h-screen overflow-hidden scroll-m-0">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={bg3}
        alt=""
      />
      <div className="relative z-10 w-full bg-[rgba(0,0,0,0.5)]">
        <Navbar />
        <div className="flex h-full">
          <Contact />
          <div className="flex w-full justify-center items-center relative">
            <div className="w-[85%] mt-5 flex flex-col gap-3 justify-center items-center text-white ">
              <h1 className=" font-bold mb-6">Work Experience</h1>

              <div className="w-full">
                <h2 className=" font-bold mb-4">
                  Full-Stack JavaScript Web Developer/Student
                </h2>
                <p>
                  <strong>GoMyCode, Wuse 2, Abuja</strong>
                  <br />
                  Dec 2023 - Apr 2024
                  <br />
                  <br />
                  ● Developed a comprehensive understanding of web development
                  principles and techniques through hands-on experience,
                  including the implementation of CRUD (Create, Read, Update,
                  Delete) operations in a book web application using the MERN
                  stack.
                  <br />
                  ● Proficient in the MERN stack for web application
                  development, encompassing MongoDB, Express.js, React, and
                  Node.js.
                  <br />
                  ● Skilled in crafting responsive and user-friendly UI
                  components using React, ensuring an optimal user experience
                  across devices.
                  <br />
                  ● Experienced in developing scalable backend APIs with
                  Express.js and Node.js, employing RESTful principles for
                  efficient data communication.
                  <br />
                  ● Proficient in translating Figma designs into functional web
                  interfaces, adhering to design specifications and user
                  requirements.
                  <br />● Dedicated to maintaining code quality and following
                  best practices in software development, including clean code
                  principles, version control, and testing methodologies.
                </p>
              </div>

              <div className="w-full">
                <h2 className=" font-bold mt-6 mb-4">Supervisor</h2>
                <p>
                  <strong>Magic City, Wuse 2, Abuja</strong>
                  <br />
                  Mar 2021 - Apr 2022
                  <br />
                  <br />
                  ● Supervised a team of staff members, providing guidance and
                  direction to ensure efficient and effective task completion.
                  <br />
                  ● Implemented performance management strategies to monitor and
                  evaluate employee performance, fostering a culture of
                  accountability and excellence.
                  <br />
                  ● Enhanced strategic decision-making by integrating Google
                  Analytics seamlessly into all projects, providing valuable
                  insights into user metrics and contributing to an 80%
                  improvement in measurements.
                  <br />● Led the development of a sophisticated Named Entity
                  Recognition system, skillfully combining Bi-LSTM, CNN, and CRF
                  models for resume parsing and selection on a sample size of
                  2000, improving research knowledge in the field. Expertly
                  handled data processing and dynamic shuffling for optimal
                  performance.
                </p>
              </div>

              <div className="w-full">
                <h2 className=" font-bold mt-6 mb-4">Urban Planner</h2>
                <p>
                  <strong>Blue Libra Concept, Katampe, Abuja</strong>
                  <br />
                  Jan 2020 - Dec 2021
                  <br />
                  <br />
                  ● Supported site work and urban planning research activities,
                  assisting in data collection, site assessments, and surveying.
                  <br />
                  ● Conducted urban planning research and analysis.
                  <br />
                  ● Assisted with site work and urban planning research.
                  <br />
                  ● Contributed to planning projects and report preparation.
                  <br />● Assisted in the preparation of planning reports and
                  documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
