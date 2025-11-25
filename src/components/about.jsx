import React from 'react'
const aboutItems = [
    {
        label: 'Project Done',
        number: 8
    }, 
    {
        label: 'Years Of Exprience',
        number: 2
    }
];
const About = () => {
  return (
    <section id='about' className='sectionAbout'>
        <div className='mb-20 '>
             <h4 className='text-center text-zinc-400'>Get To Know More</h4>
        <h1 className='text-center text-4xl font-semibold'>About Me</h1>
        </div>
       
        <div className='grid grid-cols-[1fr_300px]'>
            <div className='bg-zinc-200/90 p-7 rounded-2xl md:p-12 reveal-up'>
                <p className='text-zinc-900 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]  '>
                    welcome! i&apos;m Yoseph, a profrssional Full-stack developer with a knack for crafiting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiecethat excels in both appearance and performance.
                </p>
                <div className='felx felx-wrap items-center gap-4 md:gap-7'>
                    {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key} className='inline-block mr-10'>
                                <div className='flex items-center md:mb-2 inline-block'>
                                    <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className='text-sm text-zinc-400 '>{label}</p>
                            </div>
                        ))
                    }
                    
                </div>
            </div>
            <img src="Yoseph2.jpg" alt="Logo" className='flex justify-center items-center w-48  md:w-72  object-cover rounded-2xl shadow-lg ml-10'/>
        </div>
    </section>
  )
}

export default About