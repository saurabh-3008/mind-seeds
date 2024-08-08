import H1 from '../assets/logo1.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <nav className="bg-[#202d6e] shadow-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 items-center"> 
              <img className="h-14 w-40" src={ H1 } alt="logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 justify-center">
                <Link to="#" className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium ">Home</Link>
                <Link to="#" className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="#" className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Features</Link>
                <Link to="#" className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Screenshots</Link>
                <Link to="#" className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Reviews</Link>
                <Link to="#" className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Videos</Link>
              </div>
            </div>
            <div className="flex md:hidden">
              <button onClick={toggleMenu} className="text-gray-700  hover:text-black focus:outline-none">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="#" className="text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to="#" className="text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium">About</Link>
              <Link to="#" className="text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium">Features</Link>
              <Link to="#" className="text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium">Screenshots</Link>
              <Link to="#" className="text-white hover:text-black block px-3 py-2 rounded-md text-base font-medium">Reviews</Link>
              <Link to="#" className="text-white hover:text-black px-3 py-2 rounded-md text-sm font-medium">Videos</Link>
            </div>
          </div>
        )}
        </nav>
    )
}

export default NavBar

