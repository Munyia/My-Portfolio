import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

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
            ref={aboutRef}
            data-section="About"
            className="flex w-full justify-center items-center relative"
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight   gap-3 justify-center items-center text-white">
              <p className="flex mb-5 ">About Me</p>
              <p>
                Hello, I'm Amaranjo Ndidi Vivian, a passionate Full Stack
                JavaScript Web Developer based in Abuja, Nigeria. With a
                background in Geography and Environment from Imo State
                University, I bring a unique blend of analytical thinking and
                creative problem-solving skills to the world of web development.
              </p>
              <p>
                As a Full Stack JavaScript Developer, I specialize in building
                robust and dynamic web applications using the MERN stack
                (MongoDB, Express.js, React, and Node.js). My journey into web
                development began with comprehensive technical training at
                GoMyCode, where I honed my skills in frontend technologies like
                React.js, JavaScript, Tailwind CSS, HTML, and CSS, ensuring
                responsive and intuitive user interfaces.
              </p>
              <p>
                During my time at GoMyCode, I delved into backend development,
                mastering Node.js and Express.js to create scalable APIs and
                integrate complex database solutions with MongoDB. Through
                hands-on projects, I gained expertise in implementing CRUD
                operations, authentication, and authorization mechanisms,
                ensuring data security and integrity in web applications.
              </p>
              <p>
                Prior to my transition into tech, I gained valuable leadership
                and project management experience while working as a Supervisor
                at Magic City. There, I led a team of staff members, implemented
                performance management strategies, and leveraged data analytics
                tools like Google Analytics to drive informed decision-making
                and optimize business processes.
              </p>
              <p>
                Additionally, my background in urban planning as an Urban
                Planner at Blue Libra Concept equipped me with research and
                analytical skills, which I apply to understand user behavior and
                design user-centric web experiences.
              </p>
              <p>
                I'm committed to continuous learning and professional growth,
                staying updated with the latest technologies and industry
                trends. When I'm not coding, you can find me exploring new
                technologies, collaborating on open-source projects, or enjoying
                outdoor adventures.
              </p>
            </div>
          </section>

          <section
            ref={educationRef}
            data-section="Education"
            className="flex w-fulljustify-center items-center relative"
          >
            <div className="w-[85%] mb-14 flex flex-col ml-[7%] text-2xl font-extralight  gap-3 justify-center   text-white">
              <div className=" flex flex-col pb-3">
                <p className="item-center justify-center">Education</p>
                <p>Technical Training</p>
                <p>Gomycode Abuja</p>
                <p>Full-Stack JavaScript Development Program</p>
                <p>2023 - 2024</p>
                <p>
                  Completed an intensive full-stack JavaScript development
                  program at Gomycode Abuja. Acquired hands-on experience and
                  expertise in modern web development technologies and
                  frameworks, including:
                </p>
                <ul>
                  <li>
                    HTML/CSS: Developed skills in creating responsive and
                    visually appealing user interfaces.
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
                    MongoDB: Gained proficiency in MongoDB, a NoSQL database,
                    for storing and managing data in web applications.
                  </li>
                  <li>
                    React.js: Learned React.js library for building efficient
                    and scalable frontend applications.
                  </li>
                </ul>
              </div>
              <div>
                <p>Professional Training</p>
                <p>Clemads Global Consulting Ltd</p>
                <li>Human Resource Management</li>
                <p>2021</p>
                <p>
                  Acquired comprehensive knowledge and skills in managing human
                  resources effectively, including recruitment, training,
                  performance evaluation, and employee relations.
                </p>
                <li>International Relations & Diplomacy</li>
                <p>2021</p>
                <p>
                  Explored the dynamics of international relations and
                  diplomacy, understanding the complexities of global politics,
                  economic interactions, and diplomatic negotiations.
                </p>
                <li>Project Management</li>
                <p>2021</p>
                <p>
                  Learned essential project management methodologies and
                  techniques to initiate, plan, execute, monitor, and close
                  projects successfully, ensuring project goals are met within
                  scope, time, and budget constraints.
                </p>
              </div>
              <div>
                <p>Imo State University</p>
                <p>
                  Bachelor of Science (BSc) in Geography & Environmental
                  Management
                </p>
                <p>2014 - 2018</p>
                <p>Studied and specialized in Geography and Environmental Management, gaining insights into the complex relationship between human societies and the natural environment. Developed analytical skills to assess environmental issues and propose sustainable solutions.</p>
              </div>
            </div>
          </section>
          <section
            ref={experienceRef}
            data-section="Experience"
            className="flex w-full justify-center items-center relative "
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-3 justify-center items-center text-white">
              <p>Experience section content goes here.</p>
            </div>
          </section>
          <section
            ref={projectsRef}
            data-section="Projects"
            className="flex w-full  justify-center items-center relative "
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-3 justify-center items-center text-white">
              <p>Projects section content goes here.</p>
            </div>
          </section>
          <section
            ref={toolsAndPlatformsRef}
            data-section="Tools And Platforms"
            className="flex w-full  justify-center items-center relative"
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight  gap-3 justify-center items-center text-white">
              <p>Tools and Platforms section content goes here.</p>
            </div>
          </section>
          <section
            ref={skillsRef}
            data-section="Skills"
            className="flex w-full  justify-center items-center relative "
          >
            <div className="w-[85%] mb-14 flex flex-col text-2xl font-extralight   gap-3 justify-center items-center text-white">
              <p>Skills section content goes here.</p>
            </div>
          </section>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
