import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[10vh] bg-pry text-white px-5 flex justify-between font-playfair '>
      <div className='flex'>
        <p>Web Developer</p>
      </div>
        <div className='flex justify-around font-playfair'>
            <p>About</p>
            <p>Education</p>
            <p>Experience</p>
            <p>Projects</p>
            <p>Skills</p>
        </div>

    </div>
  )
}

export default Navbar