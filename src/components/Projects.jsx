import React from 'react';
import Cards from './Cards'
import port from '../assets/port.png'
import fanta from '../assets/fanta.png'
import yoga from '../assets/yoga.png'
import estate from '../assets/estate.png'
import ems from '../assets/ems.png'
import myntra from '../assets/myntra.png'



const Projects = () => {

  const projectJson = [
    {
      title: 'Portfolio',
      desc: ' This is my portfolio project which is fully responsive , I have completed this project using Reactjs , Tailwind Css  ',
      image: port,
      live: "https://my-portfolio-khaki-iota-71.vercel.app/",
      github: "https://github.com/RAHUL-46/MY-PORTFOLIO"
    },
    {
      title: 'Soft Drink',
      desc: ' I have created this responsive landing page for a soft drink using React js , featuring smooth animations with framer motion .',
      image: fanta,
      live: "https://soft-drink-two.vercel.app//",
      github: "https://github.com/RAHUL-46/soft-drink"
    },
    {
      title: 'Interior Design ',
      desc: 'I have created this responsive landing page for a Interior Design using React js , Tailwind css ',
      image: estate,
     
      github: "https://github.com/RAHUL-46/HOME-INTERIOR-DESIGN"
    },
    {
      title: 'Gym Landing Page',
      desc: 'I have created this responsive landing page for a Gym using React js , featuring smooth animations with framer motion .',
      image: yoga,
     
      github: "https://github.com/RAHUL-46/GYM-Landing-Page"
    },
  
    {
      title: 'EMP',
      desc: 'This is an Employee Management System project which is fully functional with a admin and employee dashboard using react , tailwind css and context api ',
      image: ems,
     
      github: "https://github.com/RAHUL-46/EMS"
    },
    {
      title: 'Myntra Clone',
      desc: ' This is Myntra Clone project which has several functionlities  , I have completed this project using Reactjs , Bootstrap and Redux toolkit , In this project we fetching the data from backend    ',
      image: myntra,
      github: "#"
    },
  ];

  return (
    <section id="projects" className=' border-t-2 border-gray-300 relative bg-slate-900 py-10 px-4'>
      <div id="projects" className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">           
              {projectJson.map((items) => {
                return <Cards item={items} />              
              })}     
        </div>
      </div>

    </section>
  )
}

export default Projects
