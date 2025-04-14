import React from 'react'

function Navbar() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
    }
  return (
    <nav className='bg-blue-950 fixed w-full'>
        <div className='flex justify-between items-center p-4'>
            <div className='md:text-2xl text-lg md:px-4 px-2'>
                Udev
            </div>
            <div>
                <ul className='flex md:gap-8 gap-4 md:text-base text-xs'>
                    <li className='hover:underline cursor-pointer' onClick={() => scrollToSection('home')}>Home</li>
                    <li className='hover:underline cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</li>
                    <li className='hover:underline cursor-pointer' onClick={() => scrollToSection('project')}>Project</li>
                    <li className='hover:underline cursor-pointer' onClick={() => scrollToSection('skills')}>Skill</li>
                    <li className='hover:underline cursor-pointer' onClick={() => scrollToSection('education')}>Education</li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar