import React, { useState } from 'react';
import YellowLogo1  from '../../src/Images/YellowLogo1.png'

const Navlinks = [
  {
    id: '1',
    name: 'HOME',
    link: '/#',
  },
  {
    id: '2',
    name: 'VISION',
    link: '/#',
  },
  // Add other links here
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='shadow-sm'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center p-4">
          {/* Logo on the left */}
          <div className='text-xl font-bold'>
            <img src={YellowLogo1} style={{ height: '70px', width: '180px' }} alt='' />
          </div>

          {/* Navigation Links - Centered in Desktop */}
          <div className={`flex-1 flex justify-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
            <ul className='flex flex-col md:flex-row items-center gap-8'>
              {Navlinks.map((link) => (
                <li key={link.id} className='py-4 md:py-0'>
                  <a
                    className='inline-block py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium'
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-gray-800 focus:outline-none'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Buttons on the right */}
          <div className="hidden md:flex space-x-4 pr-6">
            <button className="bg-primary hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
              BOOK NOW
            </button>
            <button className="bg-primary hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
              ADVERTISE
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown (when open) */}
        {isOpen && (
          <div className="md:hidden p-4 space-y-4">
            <ul className='flex flex-col items-center space-y-4'>
              {Navlinks.map((link) => (
                <li key={link.id}>
                  <a
                    className='block text-center py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium'
                    href={link.link}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4">
              <button className="bg-primary hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
                BOOK NOW
              </button>
              <button className="bg-primary hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
                ADVERTISE
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
