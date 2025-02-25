import React from 'react'
import education from '../assets/education.png'

function Education() {
  return (
    <section className='min-h-full'>
            <div className=' mx-auto w-3/4 my-16'>
                <div className='flex justify-center gap-2 my-5'>
                    <h1 className='text-3xl font-bold underline flex'>Education</h1>
                    <img src={education} alt="education" width={30} />
                </div>
                <div className='flex md:justify-between md:flex-row flex-col gap-1 rounded-xl shadow-[0_0_5px_3px_rgba(99,199,232,0.5)]'>
                    <div className='p-2 w-full'>
                        <h3 className='font-bold text-xl bg-blue-950 rounded-xl rounded-b-none p-2'>Schooling - <span className='font-serif'>(2020)</span></h3>
                        <h5 className='font-semibold bg-[#0e0a1be0] p-1 my-1 rounded-xl rounded-t-none mt-0'>• 10th from HBSE </h5>
                        <h5 className='font-semibold bg-[#0e0a1be0] p-1 my-1 rounded-xl'>• 12th from HBSE </h5>
                    </div>
                    <div className='opacity-50 shadow-[0_0_1px_1px_rgba(99,199,232,0.5)] md:hidden my-3 md:m-0'></div>
                    <div className='p-2 w-full'>
                        <h3 className='font-bold text-xl bg-blue-950 rounded-xl rounded-b-none p-2'>Graduation - <span className='font-serif'>(2020-2023)</span></h3>
                        <div className='bg-[#0e0a1be0] p-2 rounded-xl rounded-t-none'>
                            <h4 className='font-semibold'>--Gurugram University-- </h4>
                            <h5 className='font-semibold'>• Bachelor of Science (General) - 1st Division </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-slate-700 opacity-50 w-full'></div>
        </section>
  )
}

export default Education