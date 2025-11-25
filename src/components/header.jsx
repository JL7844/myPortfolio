import React from 'react'
import {useState} from 'react'
import Navbar from './navbar'
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header  className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className='max-w-creen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:flex md:gap-8'>
            <h1 className=''>
                <a href="/" className='text-2xl text-zinc-900'>
                Yoseph Legesse
                </a>
                
            </h1>
            <div className='relative md:justify-self-center'>
                <button className='menu-btn md:hidden'  onClick={() => setNavOpen(prev => !prev)}>
                     <span className="material-symbols-rounded text-3xl transition-transform duration-300">
    {navOpen ? 'close': 'menu'}
  </span>
                </button>
                <Navbar navOpen={navOpen}/>
            </div>
            <a href="#contact" className='btn btn-secondary '>Contact Me</a>
        </div>
    </header>
  )
}

export default Header