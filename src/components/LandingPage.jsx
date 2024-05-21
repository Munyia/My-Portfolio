import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const toolsAndPlatformsRef = useRef(null);
  const skillsRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");

  const refs = {
    homeRef,
    aboutRef,
    educationRef,
    experienceRef,
    projectsRef,
    toolsAndPlatformsRef,
    skillsRef,
  };

  const handleScroll = () => {
    const homeTop = homeRef.current.getBoundingClientRect().top;
    const aboutTop = aboutRef.current.getBoundingClientRect().top;
    const educationTop = educationRef.current.getBoundingClientRect().top;
    const experienceTop = experienceRef.current.getBoundingClientRect().top;
    const projectsTop = projectsRef.current.getBoundingClientRect().top;
    const toolsAndPlatformsTop =
      toolsAndPlatformsRef.current.getBoundingClientRect().top;
    const skillsTop = skillsRef.current.getBoundingClientRect().top;

    const offset = window.innerHeight / 2;

    if (skillsTop <= offset) {
      setActiveSection("Skills");
    } else if (projectsTop <= offset) {
      setActiveSection("Projects");
    } else if (toolsAndPlatformsTop <= offset) {
      setActiveSection("Tools And Platforms");
    } else if (experienceTop <= offset) {
      setActiveSection("Experience");
    } else if (educationTop <= offset) {
      setActiveSection("Education");
    } else if (aboutTop <= offset) {
      setActiveSection("About");
    } else if (homeTop <= offset) {
      setActiveSection("Home");
    } else {
      setActiveSection("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("data-section"));
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex flex-col pt-[5%] h-screen overflow-hidden scroll-m-0">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={bg3}
        alt=""
      />
      <div className="relative z-10 w-full bg-[rgba(0,0,0,0.5)] h-full">
        <Navbar
          scrollToSection={scrollToSection}
          refs={{
            homeRef,
            aboutRef,
            educationRef,
            experienceRef,
            projectsRef,
            toolsAndPlatformsRef,
            skillsRef,
          }}
          activeSection={activeSection}
        />
        <div className="flex flex-col ml-[15%]  overflow-y-auto h-full ">
          <section
            ref={homeRef}
            data-section="Home"
            className="flex w-full  justify-center items-center relative h-screen"
          >
            <div className="w-[85%] pb-[4%] mb-2 text-2xl font-extralight  h-screen flex flex-col gap-3 justify-center items-center text-white">
              <p>
                Hi, I'm Amaranjo Ndidi Vivian, a skilled full-stack JavaScript
                developer. With a background in Geography and certifications in
                HR, International Relations, and Project Management, I bring
                diverse expertise.
              </p>
              <p>
                Having completed intense full-stack JavaScript training, I
                specialize in HTML, CSS, Tailwind CSS, JavaScript, Node.js,
                Express, and MongoDB. I recently deployed WordSmitters, a web
                app for writers to publish and readers to enjoy books.
              </p>
              <p>
                Explore my coding journey on GitHub. Passionate about
                problem-solving and effective communication, I'm eager to
                contribute to tech innovation. Let's connect for collaboration
                opportunities.
              </p>
            </div>
          </section>

          <section
            ref={educationRef}
            data-section="Education"
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
          <section
            ref={experienceRef}
            data-section="Experience"
            className="flex w-full justify-center items-center relative "
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-3 justify-center items-center text-white">
              <p className="item-center font-bold flex justify-center">
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
          </section>
          <section
            ref={projectsRef}
            data-section="Projects"
            className="flex w-full  justify-center items-center relative "
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-5 justify-center items-center text-white">
              <p className="item-center font-bold flex justify-center">
                Projects
              </p>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Book Web Application</p>
                <p>
                  <span className=" font-bold ">Technologies Used: </span>React,
                  Tailwind CSS, MongoDB, Express.js, Node.js
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://word-smitters.vercel.app/" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/WordSmitters" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  Developed a comprehensive book web application using the MERN
                  stack. Implemented CRUD operations to manage book data
                  effectively. Utilized Tailwind CSS for rapid and efficient
                  styling, ensuring a responsive and visually appealing user
                  interface.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Portfolio Website</p>
                <p>
                  {" "}
                  <span className="font-bold">Technologies Used: </span>React,
                  Tailwind CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://my-portfolio-omega-six-48.vercel.app/" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/My-Portfolio" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>{" "}
                  Designed and developed a personal portfolio website to
                  showcase projects and professional experience. Used React for
                  the frontend and Tailwind CSS for styling, ensuring a modern
                  and responsive design. The website highlights skills,
                  projects, and contact information, providing a comprehensive
                  overview of capabilities and accomplishments.
                </p>
              </div>
              {/* <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Farming Connect</p>
                <p >
                <span className=" font-bold ">Technologies Used: </span>React, Tailwind CSS, MongoDB, Express.js,
                  Node.js
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://my-portfolio-omega-six-48.vercel.app/" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/My-Portfolio" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>{" "}
                  Farming Connect is an innovative platform designed to foster
                  communication and information sharing among farmers. This
                  project creates a digital community where farmers can post
                  news, share updates, and exchange knowledge about agricultural
                  practices, market trends, and innovative farming techniques.
                </p>
              </div> */}
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Apple Landing Page Clone</p>
                <p>
                <span className=" font-bold ">Technologies Used: </span>React and Tailwind CSS{" "}
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://apple-coral-two.vercel.app/" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/shilohex/Apple" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  The Apple Landing Page Clone replicates the official Nigerian
                  Apple website's landing page, showcasing proficiency in modern
                  front-end technologies, particularly React and Tailwind CSS.
                  This project was undertaken to practice and demonstrate
                  advanced front-end development skills.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Coffee Page</p>
                <p>
                  <span className="flex font-bold ">Technologies Used:</span>{" "}
                  HTML and CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://coffee-page-react.vercel.app/" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://github.com/Munyia/Coffee-Page-React" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  The Coffee Page is a visually appealing web page that
                  showcases various types of coffee. Initially designed in
                  Figma, the page was developed using HTML and CSS to create a
                  clean, modern layout emphasizing design aesthetics and
                  usability.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">DocPlanner clone Page</p>
                <p>
                  <span className="flex font-bold ">Technologies Used:</span>{" "}
                  HTML and CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://github.com/Munyia/DocPlanner" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://doc-planner-two.vercel.app/t" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  The DocPlanner Page is clone of the original DocPlanner page, the page was developed using HTML and CSS to create a
                  clean, modern layout emphasizing design aesthetics and
                  usability.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex font-bold ">Dom</p>
                <p>
                  <span className="flex font-bold ">Technologies Used:</span>{" "}
                  HTML and CSS
                </p>
                <div className=" inline-flex gap-4">
                <a href="https://github.com/Munyia/DOM" className=" bg-pry text-sec px-4 py-2 rounded " target="_blank" rel="noopener noreferrer">View Live</a>
                <a href="https://dom-smoky.vercel.app/" className="bg-pry text-sec   px-4 py-2  rounded" target="_blank" rel="noopener noreferrer">View Code</a>
                </div>
                <p>
                  <span className=" font-bold mr-3 "> Description:</span>
                  The Dom Page is a project showing how JavaScript is used to increase and decrease total amount and quantity of goods that are stored in a cart.
                </p>
              </div>
              <p>Check out my Github for more projects i have done</p>
            </div>
          </section>
          <section
            ref={toolsAndPlatformsRef}
            data-section="Tools And Platforms"
            className="flex w-full  justify-center items-center relative"
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-5 justify-center items-center text-white">
              <p className="item-center font-bold flex justify-center">
              Tools and Platforms
              </p>
              <p>I rely on a select set of tools and platforms to streamline my development process:</p>
              <div>
              <p className="font-bold">Postman</p>
              <p>Postman simplifies API testing and documentation, ensuring the reliability and efficiency of my APIs.</p>
              </div>
              <div>
              <p  className="font-bold">Render</p>
              <p>Render provides hassle-free deployment for web applications, allowing me to focus on building exceptional products.</p>
              </div>
              <div>
              <p  className="font-bold">Vercel</p>
              <p>Vercel offers lightning-fast hosting for front-end projects, ensuring optimal performance and global availability.</p>
              </div>
              <div>
                <p  className="font-bold">Git & GitHub</p>
                <p>Git and GitHub facilitate seamless version control and collaboration, enhancing my workflow and project management.</p>
              </div>
              <div>
                <p  className="font-bold">Visual Studio Code</p>
                <p>Visual Studio Code is my go-to code editor, offering a rich feature set and unparalleled performance for all my development needs.</p>
              </div>
              <div>
                <p  className="font-bold">Sublime Text</p>
                <p>Sublime Text provides a lightweight and versatile text editing experience, ideal for quick edits and smaller projects.</p>
              </div>
            </div>
          </section>
          <section
            ref={skillsRef}
            data-section="Skills"
            className="flex w-full  justify-center items-center relative "
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight   gap-3 justify-center items-center text-white">
            <p className="item-center font-bold flex justify-center">
             Skills
              </p>
              <div>
                <div>
                <p className="font-bold">Frontend</p>
                <p>I specialize in creating dynamic and responsive user interfaces using the latest frontend technologies:</p>
                </div>
                <div>
                <ul className="flex flex-col gap-3">
                  <p> <span className="font-bold">React.js:</span> Building interactive and efficient web applications with a focus on performance and scalability.</p>
                  <p><span  className="font-bold">JavaScript:</span> Utilizing modern JavaScript (ES6+) to develop robust and maintainable code.</p>
                  <p><span className="font-bold">Tailwind CSS:</span> Crafting responsive and aesthetically pleasing designs with a utility-first CSS framework.</p>
                  <p><span  className="font-bold">HTML & CSS: </span>Building structured and styled web pages with fundamental web technologies.</p>
                  <p><span className="font-bold">Bootstrap: </span>Rapidly developing responsive layouts and components with this popular CSS framework.</p>
                  <p><span className="font-bold">Responsive Designs:</span> Ensuring optimal user experience across various devices and screen sizes</p>
                </ul>
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

export default LandingPage;
