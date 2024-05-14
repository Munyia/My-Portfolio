import React from 'react'
import Navbar from './Navbar'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="flex  h-screen ">
       <div className="">
        <Navbar/>
        <div className='flex'>
        <Contact/>
    <div className='flex bg-sec w-[85%] '>
        <p>Hi, I'm Amaranjo Ndidi Vivian, transitioning into full-stack development. With a BSc in Geography and Environmental Management and also certifications in Human Resources, International Relationship & Diplomacy and Project Management, I bring a diverse skill set.

Currently in intense full-stack training, specializing in HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

Explore my coding journey on GitHub. Passionate about effective communication, problem-solving, and project management.

Excited to make an impact in tech with my background, dedication, and continuous learning. Let's connect on GitHub for more insights and collaboration.

</p>
</div>
        </div>
      </div>
    </div>
  )
}

export default Home