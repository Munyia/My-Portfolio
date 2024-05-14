import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import {bg3} from "../assets/res"

const Home = () => {
  return (
    <div className="relative flex h-screen overflow-hidden scroll-m-0">
    <img className="absolute inset-0 w-full h-full object-cover z-0" src={bg3} alt="" />
    <div className="relative z-10 w-full bg-[rgba(0,0,0,0.5)]">
      <Navbar />
      <div className="flex h-full">
        <Contact />
        <div className="flex w-full justify-center items-center relative">
          <div className="w-[85%] mb-14 text-2xl flex flex-col gap-3 justify-center items-center text-white ">
             <p>
              Hi, I'm Amaranjo Ndidi Vivian, a skilled full-stack JavaScript
              developer. With a background in Geography and certifications in
              HR, International Relations, and Project Management, I bring
              diverse expertise.
            </p>
            <p>
              Having completed intense full-stack JavaScript training, I
              specialize in HTML, CSS, Tailwind CSS, JavaScript, Node.js,
              Express, and MongoDB. I recently deployed WordSmitters, a web app
              for writers to publish and readers to enjoy books.
            </p>
            <p>
              Explore my coding journey on GitHub. Passionate about
              problem-solving and effective communication, I'm eager to
              contribute to tech innovation. Let's connect for collaboration
              opportunities.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
