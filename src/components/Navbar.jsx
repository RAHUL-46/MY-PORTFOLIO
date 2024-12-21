import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import Redux from '../assets/Redux.png'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full  border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0">
    <div className="max-w-7xl mx-auto flex h-14 items-center">
      <div className="md:mr-4 flex justify-between w-full ">
        
          <h3 className='border-none p-2 "transition-colors hover:text-foreground/80 text-foreground/60 font-bold text-white hover:text-red-500  '>Rahul Goswami</h3>
          {/* <span className="hidden font-bold sm:inline-block">Rahul Goswami</span> */}
        
        <nav className="md:flex hidden items-center space-x-6 text-lg font-medium ">
          <a className="transition-colors hover:text-foreground/80 hover:text-red-400 text-white" href="#about">About</a>
          <a className="transition-colors hover:text-foreground/80 hover:text-red-400  text-white" href="#projects">Projects</a>
          <a className="transition-colors hover:text-foreground/80 hover:text-red-400  text-white" href="#testimonial">Testimonials</a>
          <a className="transition-colors hover:text-foreground/80 hover:text-red-400  text-white" href="#contact">Contact</a>
        </nav>
      </div>
      <button
        className="inline-flex items-center bg-white justify-center rounded-md md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="sr-only">Open main menu</span>
        {mobileMenuOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
    {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-red-900">About</a>
            <a href="#projects" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-red-900">Projects</a>
            <a href="#testimonial" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-red-900">Testimonials</a>
            <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-50 hover:text-red-900">Contact</a>
          </div>
        </div>
      )}
  </header>
  )
}

export default Navbar
