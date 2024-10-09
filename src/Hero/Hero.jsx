import React, { useState } from 'react';
import tempo from '../../src/Images/tempo.png';
import scooty from '../../src/Images/scooty.png';
import cmodel from '../../src/Images/cmodel.png';
import bgcity from '../../src/Images/city1.jpg';

const Hero = () => {
  const [activeButton, setActiveButton] = useState(null); // State to track active button
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 


  const data = [
    {
      id: 1,
      name: 'Cargo Tempo',
      img: tempo,
      mark: 'Effortless',
      rent: 'on Rent only on Rs 699 /-',
      description:
        'The Cargo Tempo is a compact, eco-friendly, and affordable cargo vehicle designed for long-distance trips. Its sleek design and performance make it ideal for transporting heavy cargo.',
    },
    {
      id: 2,
      name: 'Cargo Commuter',
      img: scooty,
      mark: 'Hurry Up !!',
      rent: 'on Rent only on Rs 299 /-',
      description:
        'The Cargo Commuter is a compact, eco-friendly, and affordable cargo vehicle designed for short-distance trips. Its sleek design and performance make it ideal for transporting light cargo.',
    },
    {
      id: 3,
      name: 'C Model',
      img: cmodel,
      mark: 'Affordable',
      rent: 'on Rent only on Rs 299 /-',
      description:
        'The C Model is a compact, eco-friendly, and affordable cargo vehicle designed for short-distance trips. Its sleek design and performance make it ideal for various needs.',
    },
  ];

  return (
    
    <div>
        <div className="container mx-auto my-12 px-4 sm:px-6 md:px-8 lg:px-12">
  {/* Responsive background section */}
  <div className='relative bg-[url("./src/Images/city1.jpg")] h-64 sm:h-80 md:h-96 w-full bg-cover bg-center'>
    
    {/* Absolute positioning for text at the bottom-left */}
    <div className="absolute bottom-0 left-0 p-4 sm:p-8 md:p-12">
      {/* Title */}
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-left">
        Join Us
      </h1>
      
      {/* Subtitle */}
      <p className='text-2xl sm:text-2xl md:text-3xl font-semibold text-left'>
        in reshaping the 
        
        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-600">
        &nbsp;Future Of Transit
        </span>
      </p>
    </div>
  </div>
</div>


      {/* Button Section */}
      <div className="flex flex-col items-center justify-center h-32 sm:h-40 md:h-48 bg-gray-100">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
          Discover Our Services
        </h1>


         {/* Mobile Menu Button */}
      <div className="sm:hidden z-20">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-gray-200 px-4 py-2 rounded-md focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

         {/* Buttons for larger screens */}
      <div className="hidden sm:flex space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
        {data.map((item) => (
          <button
            key={item.id}
            className={`px-6 py-2 rounded font-semibold transition-colors duration-300 ease-in-out ${
              activeButton === item.id
                ? 'bg-yellow-400'
                : 'bg-red-500 text-white hover:bg-red-600'
            }`}
            onClick={() => setActiveButton(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      
      {/* flex flex-col sm:hidden space-y-4 mt-4 */}
        {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute  left-0 right-0 z-30 flex flex-col sm:hidden space-y-4 bg-white shadow-lg py-4">
          {data.map((item) => (
            <button
              key={item.id}
              className={`px-6 py-2 rounded font-semibold transition-colors duration-300 ease-in-out ${
                activeButton === item.id
                  ? 'bg-yellow-400'
                  : 'bg-red-500 hover:bg-red-600'
              }`}
              onClick={() => {
                setActiveButton(item.id);
                setIsMobileMenuOpen(false); // Close menu on selection
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
      {/* Hero Section */}
      {data
        .filter((item) => item.id === activeButton) // Only show active section
        .map(({ id, name, img, mark, rent, description }) => (
          <div key={id} className=" min-h-[620px] w-full bg-yellow-100">
            <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="order-1 sm:order-2">
                <img src={img} alt={name} className="animate-slideInFromRight" />
              </div>
              <div className="order-2 sm:order-1">
                <p className="text-primary text-2xl font-serif">{mark}</p>
                <h1 className="text-5xl lg:text-7xl font-semibold font-serif drop-shadow-xl">
                  {name}
                </h1>
                <br />
                <p className="text-black hover:text-primary text-4xl font-serif pt-4">
                  {rent}
                </p>
                <br />
                <p className="text-yellow-500 text-2xl font-serif hover:text-black">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Hero;
