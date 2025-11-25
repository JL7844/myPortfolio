import React from 'react'

const Skill = () => {
//   const check = <i class="fa-solid fa-check-circle"></i>
// ;

  const frontSkill = [
    {
      id: 1,
      img: <img className='w-6 inline-block' src="Html.svg" alt="" />,
    skill: "HTML",
    level: "Exprienced"
  }, 
    {
      id: 2,
      img: <img className='w-4 inline-block' src="CSS.png" alt="" />,
    skill: "CSS",
    level: "Exprienced"
  },
{
  id: 3,
  img: <img className='w-6 inline-block' src="Tailwindcss.png" alt="" />,
    skill: "tailwindcss",
    level: "intermidate"
  },
{
  id: 4,
  img: <img className='w-5 inline-block' src="Js.png" alt="" />,
    skill: "JavaScript",
    level: "Exprienced"
  },
{   id: 5,
  img: <img className='w-5 inline-block' src="React.svg" alt="" />,
    skill: "React",
    level: "Exprienced"
  },

{
    id: 6,
    img: <img className='w-5 inline-block' src="Figma.png" alt="" />,
    skill: "Figma",
    level: "Exprienced"
  },];
  const backSkills =[
    {
      id: 1,
      img: <img className='w-5 inline-block' src="Nodejs.png" alt="" />,
    skill: "Node Js",
    level: "intermediate"
  },
{
  id: 2,
  img: <img className='w-6 inline-block' src="Expressjs.png" alt="" />,
    skill: "Express JS",
    level: "intermediate"
  },
  {
    id: 3,
    img: <img className='w-6 inline-block' src="Git.png" alt="" />,
    skill: "GIT",
    level: "intermediate"
  },
{
  id: 4,
  img: <img className='w-6 inline-block' src="MongoDB.jpg" alt="" />,
    skill: "MongoDB",
    level: "intermediate"
  },
  ];
  return (
    <div className='mt-20 ' id='exprience'>
    <h4 className='text-center text-zinc-400'>Explore My</h4>
        <h1 className='text-center text-4xl font-semibold reveal-up'>Exprience</h1>
    <section className='grid grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-[15px] mt-20 lg:mx-20'>
        <div className='p-6 border rounded-lg w-full lg:w-[450px] mx-auto'>
            <span className='flex justify-center mb-4 font-bold'>Frontend Development</span>
            <div className='grid grid-cols-2'>
                {frontSkill.map(skills => (<ul className=',
                '>
                  <li key={skills.id} className='mb-3'>{skills.img}<span className='skill'>{skills.skill}</span><br></br> <span className='level
                  '>{skills.level}</span></li>
                </ul>))}
            </div>
        </div>
        <div className='p-6 border rounded-lg w-full lg:w-[450px] mx-auto'>
            <span className='flex justify-center mb-4 font-bold'>Backend Development</span>
             <div className='grid grid-cols-2'>
                {backSkills.map(skills => (<ul className=''>
                  <li key={skills.id} className='mb-3'>{skills.img} <span className='skill'>{skills.skill}</span><br></br> <span className='level'>{skills.level}</span></li>
                </ul>))}
            </div>
        </div>
    </section>
    </div>
    
  )
}

export default Skill