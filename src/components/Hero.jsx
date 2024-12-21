import React from 'react'
import hero from '../assets/Hero.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactlogo from '../assets/React.png'
import Redux from '../assets/Redux.png'
import Github from '../assets/Github.png'
import tailwind from '../assets/Tailwind Css.png'
// import herobg from '../assets/herobg.jpg'
// import herobg1 from '../assets/herobg1.jpg'



const Hero = () => {
  return (
    <>
    
    <section
      // style={{
      //   backgroundImage: `url(${herobg1})`,
      //   backgroundPosition: 'center',
      //   backgroundSize: 'cover',
      //   backgroundRepeat: 'no-repeat',
      // }}
      
      className=' relative ' >    
       
       
      <div className=" max-w-7xl mx-auto">
        <div className="flex  flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10 ">
            <h1 className="lg:text-7xl text-white text-4xl  font-bold lg:leading-snug leading-">Hi There, <br /> I'm Rahul <span className='text-red-500'>Goswami </span></h1>

            <p className="md:text-2xl text-xl mb-4 text-white">Web Developer & Designer</p>
            <p className="mb-4 text-white" >I'm a passionate web developer with expertise in React.js and modern web technologies. I love creating beautiful and functional websites that solve real-world problems.</p>
            <button className=' border-2 border-white hover:border-red-500 hover:text-white text-red-500 font-bold px-3 py-2 w-max rounded-md'><a href="https://drive.google.com/file/d/1CZbudyUOTuOIT76r3vZWBG9dl9-ARTbS/view?usp=drivesdk" download target='_blank'>Download CV</a></button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img
              src={hero}
              alt="Jane Doe"

              className="lg:h-[90vh] h-96"
            />
            <img src={reactlogo} alt="" className='absolute w-10 top-36 left-0 rounded-full  md:hidden'/>
            <img src={Redux} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
            <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
          </div>
        </div>
      </div>
      <div className='absolute tra top-40 right-10 hidden  p-4  md:flex flex-col gap-6 rounded-full'>

       <a href="https://www.instagram.com/rahul_.010?igsh=MWJvOWd2dXpmY3RlZg==" target='_blank'><div className='h-[10vh] w-[8vw]'>
        <img src={instagram} alt="" className='w-20 hover:w-[85px] ' />
        </div></a>
        <a href="https://github.com/RAHUL-46" target='_blank'><div className='h-[10vh] w-[8vw]'>
        <img src={Github} alt="" className='w-20 hover:w-[85px] ' />
        </div></a>
        <a href="https://www.linkedin.com/in/rahul-goswami-a66328285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><div className='h-[10vh] w-[8vw]'>
        <img src={linkedin} alt="" className='w-20 hover:w-[85px] ' />
        </div></a>
        
      </div>
      
    </section>
    </>
  )
}

export default Hero
