import React from 'react'
import {ReactLenis} from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './index.css'

gsap.registerPlugin(useGSAP, ScrollTrigger );
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Skill from './components/skill'
import Project from './components/project'
import Contact from './components/contact'
import Footer from './components/footer'
const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element)=>{
      gsap.to(element, {
        scrolltrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true,
        
        }, 
        y: 0, 
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  }
);
  return (
    <ReactLenis root>
     <Header />
     <main>
    <Hero />
    <About />
    <Skill />
    <Project />
    <Contact />
    </main>
     <Footer />
    </ReactLenis>
    
    
  )
}

export default App