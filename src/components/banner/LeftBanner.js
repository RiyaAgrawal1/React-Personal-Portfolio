import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa"

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Coder.", "Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className='w-1/2 flex flex-col py-20 gap-20'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl font-bold text-white'>
                    Hi, I'm{" "}
                    <span className='text-designColor capitalize'>Riya Agrawal</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#ff014f'
                    />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                    Striving for Excellence in software engineering, driving innovation for personal growth and a collaborative work environment.
                </p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                    <div className='flex gap-4'>
                        <a href="https://www.linkedin.com/in/riya-agrawal-500196204/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                            <FaLinkedinIn />
                        </a>

                        <a href="mailto:riyajagrawal@gmail.com" className="bannerIcon">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBanner;
