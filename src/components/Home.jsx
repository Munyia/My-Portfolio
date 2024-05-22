import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import { bg3 } from "../assets/res";

const Home = () => {
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
            className="flex w-full  justify-center items-center relative h-screen"
          >
            <div className="w-[85%] pb-[4%] mb-2 text-2xl font-extralight h-screen flex flex-col gap-3 justify-center items-center text-white">
      <div className={`transform transition-transform duration-1000 ease-in-out ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
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
        <a href="https://drive.google.com/file/d/1hE-L0RH6a52NUZFGHInwOMLnED808n-y/view?usp=sharing" className="bg-pry text-sec flex text-center mt-10 px-4 py-2 rounded-2xl" target="_blank" rel="noopener noreferrer">View my CV</a>
    </div>
          </section>
        
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
