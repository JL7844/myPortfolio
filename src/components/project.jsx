import React from 'react'
import ProjectCard from './ProjectCard.jsx'

const Project = () => {
  const projects = [
    { 
      imgSrc: '/public/ach.png',
       title: 'ACH Company Website',
        tags: ['API', 'Development'],
         projectLink: 'https://github.com/JL7844' 
        },
    { 
      imgSrc: '/public/campus.jpg',
       title: 'Campus Transfer', 
       tags: ['API', 'Development'], 
       projectLink: 'https://github.com/JL7844/campus-transfer' 
      },
    { 
      imgSrc: '/public/coffee.webp',
       title: 'Coffee Ecommerce',
        tags: ['API', 'Development'], 
        projectLink: 'https://github.com/JL7844/Udemy-projects' 
      },
    { 
      imgSrc: '/public/lawyer.jpg', 
      title: 'Legal Connect',
       tags: ['API', 'Development'],
        projectLink: 'https://github.com/bisrat6/LegaLink-group-32' 
      },
    { imgSrc: '/public/game.jpg',
       title: 'Simple Game',
        tags: ['API', 'Development', 'Godot'], projectLink: 'https://github.com/yonaned/Daydream-Hackaton-Godot-Game-with-Speedrun--Squad' },
  ]

  return (
    <section id='project' className='sectionProject py-16'>
        <h2 className='text-3xl font-bold text-center mb-10 reveal-up'>My Portfolio Highlights</h2>
      <div className='container mx-auto px-4'>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              imgSrc={imgSrc}
              title={title}
              key={key}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
