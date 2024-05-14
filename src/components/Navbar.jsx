import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[13vh] relative bg-pry text-white px-5 flex py-5 justify-between font-playfair '>
      <div className='flex'>
        <p>Web Developer</p>
      </div>
        <div className='flex font-playfair justify-between'>
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