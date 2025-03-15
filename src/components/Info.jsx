import React, { useState, useEffect } from 'react';
import awards from '../assets/awards.png';
import call from '../assets/call.png';
import gmail from '../assets/gmail.png';
import location from '../assets/location.png';

const Info = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android|iphone|ipad|ipod/i.test(userAgent)) {
            setIsMobile(true);
        }
    }, []);

    return (
        <section className='min-h-screen'>
            <div className='mx-auto w-3/4 my-7 '>
                <div className='flex gap-2 justify-center items-center p-1'>
                    <h3 className='text-3xl font-bold underline'>Awards and Honor</h3>
                    <img src={awards} alt="award" width={35} />
                </div>
                <div className='my-5 bg-[#00000070] p-2 rounded-xl shadow-[0_0_5px_3px_rgba(99,199,232,0.5)]'>
                    <h5 className='text-center text-xl font-semibold m-2 bg-[#1a0c58b0] rounded-xl p-1'>• Letter of Recommendation</h5>
                    <h5 className='text-center text-xl font-semibold m-2 bg-[#1a0c58b0] rounded-xl p-1'>• Certification of Internship</h5>
                </div>
            </div>
            <div className='flex md:justify-between gap-2 w-4/5 mx-auto my-16 md:flex-row flex-col rounded-xl shadow-[0_0_5px_3px_rgba(99,199,232,0.5)]'>
                <div className='w-full border-2 border-[#1f1f76] bg-[#00000070] rounded-xl'>
                    <h1 className='text-2xl font-bold text-center underline my-2'>Contact</h1>
                    <div className='m-2 p-2'>
                        <ul className='flex flex-col justify-center items-center gap-1 mx-auto my-4'>

                            {/* <li className='font-semibold w-full bg-[#1a0c58b0] p-2 rounded-xl' onMouseEnter={() => setHoveredItem('phone')} onMouseLeave={() => setHoveredItem(null)} >
                                <a href="tel:+919650000000" className='flex md:gap-7 gap-3 items-center '>
                                    <img src={call} alt="call" className='w-5 h-5 md:w-8 md:h-8'/>
                                    <span className='font-serif'>+91 96500000000</span>
                                </a>
                                {hoveredItem === 'phone' && (
                                    <div className='text-xs text-red-600 pl-10'><h5>Click the Phone No. to make a call</h5></div>
                                )}
                            </li> */}
                            
                            <li className='font-semibold w-full bg-[#1a0c58b0] p-2 rounded-xl' onMouseEnter={() => setHoveredItem('email')} onMouseLeave={() => setHoveredItem(null)}>
                                {isMobile ? (
                                    <a href="mailto:tanyadubey5005@gmail.com" className='flex md:gap-7 gap-3 items-center'>
                                        <img src={gmail} alt="mail" className='w-5 h-5 md:w-8 md:h-8' />
                                        <span className='font-serif'>tanyadubey5005@gmail.com</span>
                                    </a>
                                ) : (
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=tanyadubey5005@gmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='flex md:gap-7 gap-3 items-center'
                                    >
                                        <img src={gmail} alt="gmail" className='w-5 h-5 md:w-8 md:h-8' />
                                        <span className='font-serif'>tanyadubey5005@gmail.com</span>
                                    </a>
                                )}
                                {hoveredItem === 'email' && (
                                    <div className='text-xs text-red-600 pl-10'><h5>Click the Gmail Address</h5></div>
                                )}
                            </li>
                            <li className='font-semibold w-full bg-[#1a0c58b0] p-2 rounded-xl' onMouseEnter={() => setHoveredItem('address')} onMouseLeave={() => setHoveredItem(null)}>
                                <a href="https://www.google.com/maps?q=Gurgaon,+Haryana,+India,+122413" target="_blank" rel="noopener noreferrer" className='flex md:gap-7 gap-3 items-center'>
                                    <img src={location} alt="mail" className='w-5 h-5 md:w-8 md:h-8' />
                                    <span className='font-serif'>Gurgaon, Haryana, India, 122413</span>
                                </a>
                                {hoveredItem === 'address' && (
                                    <div className='text-xs text-red-600 pl-10'><h5>Click the Address to see location</h5></div>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info;
