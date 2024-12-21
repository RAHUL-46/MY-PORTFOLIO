import React from 'react'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import JS from '../assets/JS.png'
import ReactL from '../assets/React.png'
import Redux from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import Nodejs from '../assets/Nodejs.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import GSAP from '../assets/GSAP.png'
import NextJs from '../assets/NextJs.png'

const About = () => {
  return (
    <div className='relative' id="about">
      <div className="bg-slate-900 border-t-2 border-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className=" text-gray-200 text-2xl font-extrabold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-red-500 sm:text-4xl">
            Hi, I'm Rahul Goswami
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-200 lg:mx-auto">
            A Frontend Web Developer with expertise in web development, React js , Tailwind Css and modern web technologies.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-red-500">My Journey</h3>
              <p className="mt-4 text-lg text-gray-200">
                I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in Frontend Development (React.js , GSAP , Framer Motion , Tailwind Css), I have built projects such as a Employee Management System , A Myntra App Clone, and some responsive Landing pages . My projects demonstrate my ability to integrate solutions with sleek, user-friendly frontend designs.
              </p>
              
            </div>
            {/* <div>
              <h3 className="text-2xl font-semibold text-gray-900">Skills & Expertise</h3>
              <ul className="mt-4 space-y-3 text-lg text-gray-600">
                <li>Full-Stack Web Development (MERN Stack)</li>
                <li>WordPress Development</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>React.js, Next.js, Node.js, and Express.js</li>
                <li>Database Management (MongoDB)</li>
                <li>API Integration & Development</li>
              </ul>
            </div> */}
            <div className='border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
            <h3 className="text-2xl font-semibold text-red-500">Skills & Expertise</h3>
            <div className='flex items-center justify-center flex-wrap gap-3'>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Html} alt="" className='w-10'/>
                  <span className='font-semibold text-gray-200'>HTML</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Css} alt="" className='w-8'/>
                  <span className='font-semibold text-gray-200 '>CSS</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={JS} alt="" className='w-10'/>
                  <span className='font-semibold text-gray-200'>Javascript</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={ReactL} alt="" className='w-8 rounded-full'/>
                  <span className='font-semibold text-gray-200'>React</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Redux} alt="" className='w-8'/>
                  <span className='font-semibold text-gray-200'>Redux</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Tailwind} alt="" className='w-8 rounded-full'/>
                  <span className='font-semibold text-gray-200'>Tailwind</span>
                </div>
                <div className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={Bootstrap} alt="" className='w-10'/>
                  <span className='font-semibold text-gray-200'>Bootstrap</span>
                </div>
                
                <div className='border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                  <img src={GSAP} alt="" className='w-10'/>
                  <span className='font-semibold p-2 text-gray-200'>GSAP</span>
                </div>
               
                {/* <div className='border border-red-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg'>
                  <img src={Html} alt="" className='w-10'/>
                  <span className='font-semibold'>HTML</span>
                </div>
                <div className='border border-red-500 flex items-center gap-1 w-max px-2 py-1 rounded-lg'>
                  <img src={Html} alt="" className='w-10'/>
                  <span className='font-semibold'>HTML</span>
                </div> */}
            </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-extrabold text-red-500 ">More About Me</h3>
          <p className="mt-4 text-lg text-gray-200">
            I have completed my Btech from Uiet Kurukshetra with 8.3 cgpa , I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web development. I also have 3 months of experince as frontend web developer intern .
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
