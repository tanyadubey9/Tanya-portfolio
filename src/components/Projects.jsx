import React from 'react'
import internship from '../assets/internship.png'
import project from '../assets/project.png'
import skill from '../assets/skill.png'

const Project = () => {
  return (
    <section className='min-h-full'>
      <div className='p-5 pt-14 w-3/4 mx-auto my-7 '>
        <div className='mb-7 rounded-xl shadow-[0_0_5px_3px_rgba(99,199,232,0.5)]'>
          <div>
            <div className='flex justify-center bg-blue-950 my-3 rounded-xl rounded-b-none mb-0 py-2 gap-2'>
              <h2 className='text-2xl font-bold'> ● <span className='underline'> Internship</span></h2>
              <img src={internship} alt="internship" width={35} />
            </div>
            <h4 className='flex md:flex-row flex-col md:justify-around items-center text-lg font-semibold rounded-xl bg-[#0606268a] p-2 rounded-t-none'>
              <span className='my-3 md:my-0'> Project : THE PET SHOP </span><span><i>18/04/2024 - 18/05/2024</i> </span></h4>
          </div>
        </div>
        <div className='flex md:justify-around gap-2 rounded-xl shadow-[0_0_5px_3px_rgba(99,199,232,0.5)]'>
          <div className='w-full'>
            <div className='flex gap-2 justify-center py-2 bg-blue-950 rounded-xl rounded-b-none mb-0 my-3'>
              <h2 className='text-2xl font-bold'> ● <span className='underline'>Projects</span></h2>
              <img src={project} alt="project" width={30} />
            </div>

            <ul className='flex flex-col gap-2 w-full bg-[#142548a4] p-1'>
              <li className='bg-[#0000008a] p-2 rounded-xl gap-2 flex justify-between items-center pr-1'>
                <a className='w-[70%] hover:underline' href="https://github.com/tanyadubey9/To-do-List.git">
                  <h4 className='text-sm md:text-lg font-semibold'>4. To-do List Application</h4>
                </a>
                <h4 className='rounded-lg text-xs md:text-sm font-semibold w-[27%]'> Tailwind CSS, React</h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl gap-2 flex justify-between items-center pr-1'>
                <a className='w-[70%] hover:underline' href="https://github.com/tanyadubey9/PassOp-project.git">
                  <h4 className='text-sm md:text-lg font-semibold'>5. Password Manager Application</h4>
                </a>
                <h4 className='rounded-lg text-xs md:text-sm font-semibold w-[27%]'> React, MongoDB, Express, Tailwind CSS</h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl gap-2 flex justify-between items-center pr-1'>
                <a className='w-[70%] hover:underline' href="https://github.com/tanyadubey9/Get-Me-A-Chai.git">
                  <h4 className='text-sm md:text-lg font-semibold'>6. 'Get Me A Chai' Application</h4>
                </a>
                <h4 className='rounded-lg text-xs md:text-sm font-semibold w-[27%]'> Next.js, Tailwind CSS </h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl gap-2 flex justify-between items-center pr-1'>
                <a className='w-[70%] hover:underline' href="https://github.com/tanyadubey9/User-Survey.git">
                  <h4 className='text-sm md:text-lg font-semibold'>7. User Survey Page</h4>
                </a>
                <h4 className='rounded-lg text-xs md:text-sm font-semibold w-[27%]'> React, Tailwind CSS </h4>
              </li>
              <li className='bg-[#0000008a] p-2 rounded-xl gap-2 flex justify-between items-center pr-1'>
                <a className='w-[70%] hover:underline' href="https://github.com/tanyadubey9/Date-Picker.git">
                  <h4 className='text-sm md:text-lg font-semibold'>8. Date-Picker Application</h4>
                </a>
                <h4 className='rounded-lg text-xs md:text-sm font-semibold w-[27%]'> Tailwind CSS, Next.js</h4>
              </li>
            </ul>

            <ul className='flex flex-col bg-[#142548a4] p-1'>
              <li className='bg-[#030313] text-center p-2 rounded-xl rounded-b-none gap-2'>
                <h2 className='text-lg font-semibold'>✨ Small Projects ✨</h2>
              </li>
              <li className='bg-[#010118cb] p-1.5 gap-2 flex justify-between items-center'>
                <a className='w-[70%] hover:underline' href="https://github.com/tanyadubey9/Netflix-landing-page-clone.git">
                  <h4 className='text-sm md:text-lg font-semibold'>1. Netflix Homepage</h4>
                </a>
                <h4 className='rounded-lg text-xs md:text-sm font-semibold w-[27%]'>HTML, CSS </h4>
              </li>
              <li className='bg-[#010118cb] p-1.5 gap-2 flex justify-between items-center'>
                <a className='w-[70%] hover:underline' href="https://github.com/tanyadubey9/X-Home.git">
                  <h4 className='text-sm md:text-lg font-semibold'>2. Twitter Homepage</h4>
                </a>
                <h4 className='rounded-lg text-xs md:text-sm font-semibold w-[27%]'>Tailwind CSS</h4>
              </li>
              <li className='bg-[#010118cb] p-1.5 gap-2 flex justify-between items-center rounded-b-xl'>
                <a className='w-[70%] hover:underline' href="https://github.com/tanyadubey9/Spotify-Project.git">
                  <h4 className='text-sm md:text-lg font-semibold'>3. Spotify Clone</h4>
                </a>
                <h4 className='rounded-lg text-xs md:text-sm font-semibold w-[27%]'>JavaScript</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border border-slate-700 opacity-100 w-full'></div>
    </section>
  )
}

export default Project
