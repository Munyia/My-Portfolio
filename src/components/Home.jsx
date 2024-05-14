import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="flex  h-screen overflow-hidden scroll-m-0">
      <div className="">
        <Navbar />
        <div className="flex">
          <Contact />
          <div className="flex bg-sec w-[85%] px-10 flex-col gap-3  text-2xl  justify-center items-center text-sec1">
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
  );
};

export default Home;
