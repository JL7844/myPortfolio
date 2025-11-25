import React from 'react'
import { ButtonPrimary, ButtonOutline }from './button'
const Hero = () => {
  return (
    <section id='home' className='section'>
        <div className='shrink-0'>
            <img src="Yoseph.jpg" alt="profile-pic" className='w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-lg' />
        </div>
        <div className='text-center md:text-left max-w-md'>
            <p className='text-zinc-600 text-center'>Hello, I'm</p>
            <h2 className='text-4xl md:text-5xl font-bold mt-1'>Yoseph Legesse</h2>
            <h2 className='text-xl md:text-2xl text-zinc-700 mt-1 text-center'>Full-Stack Developer</h2>
            <div className='flex  items-center gap-3 w-90'>
                <ButtonPrimary 
                label="Download CV"
                icon="download"
                href="resume.pdf"
                download="resume.pdf"
                />
                <ButtonOutline 
                href="#about"
                label="scroll down" 
                icon={<i className="fa-solid fa-angle-down ml-2 animate-bounce p-"></i>}
                classes="w-40 flex items-center gap-2"/>
            </div>
           
            <div className='flex justify-center md:justify-start gap-5 mt-8'>
                    <a href="https://linkedin.com/in/yosephlegesse" 
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors lg:ml-30">
                        <i className="fa-brands fa-linkedin-in text-xl"></i>
                    
                    </a>
                        <a href="https://github.com/JL7844"  target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors lg:ml-10">
                            <i className="fa-brands fa-github text-xl"></i>
                    </a>
                    
                </div>
        </div>
    </section>
  )
}

export default Hero