import React from 'react'
import file from '../assets/file.png'
import programming from '../assets/programming.png'
import download from '../assets/download.png'

function Summary() {
  return (
    <section className='min-h-full'>
      <div className='flex md:flex-row flex-col items-center justify-evenly py-20 gap-1'>
        <div className='ml-2 md:ml-0 border-t-4 border-b border-t-blue-900 border-slate-700 rounded-t-full size-60 md:size-96 flex items-end justify-center shadow-[0_0_5px_1px_rgba(99,199,232,0.5)]'>
        <img src={file} alt="mine" className='w-40 md:w-64'/>
        </div>
        <div className='md:text-4xl text-2xl p-2 text-center flex flex-col items-center'> 
          <h1 className='font-bold p-2'>TANYA DUBEY</h1>
          <div className='flex gap-1 justify-center items-end'>
          <h2>WEB DEVELOPMENT</h2>
          <img src={programming} alt="programming" className='w-7 h-7 md:w-8 md:h-8 ' />
          </div>
          <button type="button">
          <a 
            href="/Tanya-portfolio/resume.pdf" 
            download="Tanya_Dubey_Resume.pdf" 
            className="flex gap-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
          > Resume <img src={download} alt="download" width={20} /> </a>
           </button>
        </div>
      </div>
      <div className='border border-slate-700 opacity-50 w-full'></div>
    </section>
  )
}


export default Summary
