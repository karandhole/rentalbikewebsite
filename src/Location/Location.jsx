import React from 'react';
import mumbai from '../../src/Images/cities/mumbai.jpeg'
import pune1 from '../../src/Images/cities/pune1.jpg'
import banglore from '../../src/Images/cities/banglore.jpg'
import hydrabad from '../../src/Images/cities/hydrabad.jpg'
import chennai1 from '../../src/Images/cities/chennai1.jpg'
import kolkata from '../../src/Images/cities/kolkata.jpg'
import delhi from '../../src/Images/cities/delhi.jpeg'
import amd from '../../src/Images/cities/amd.avif'


const spaces = [
  { id: 1, title: 'MUMBAI', imageUrl: mumbai, overlayColor: 'bg-opacity-50 bg-yellow-400' },
  { id: 2, title: 'PUNE', imageUrl: pune1, overlayColor: 'bg-opacity-50 bg-yellow-400' },
  { id: 3, title: 'BANGLORE', imageUrl: banglore, overlayColor: 'bg-opacity-50 bg-yellow-400' },
  { id: 4, title: 'HYDRABAD', imageUrl: hydrabad, overlayColor: 'bg-opacity-50 bg-yellow-400' },
  { id: 5, title: 'CHENNAI', imageUrl: chennai1, overlayColor: 'bg-opacity-50 bg-yellow-400' },
  { id: 6, title: 'KOLKATA', imageUrl: kolkata, overlayColor: 'bg-opacity-50 bg-yellow-400' },
  { id: 7, title: 'DELHI', imageUrl: delhi, overlayColor: 'bg-opacity-50 bg-yellow-400' },
  { id: 8, title: 'AHMEDABAD', imageUrl: amd, overlayColor: 'bg-opacity-50 bg-yellow-400' }
  
  
];

const Location = () => {
  return (
    <div className="bg-gray-900 py-16">
      <h2 className="text-4xl font-bold font-serif text-center text-white mb-12">Find EXER ENERGY In Your City !!!</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {spaces.map(space => (
          <div key={space.id} className="relative group">
            <img
              src={space.imageUrl}
              alt={space.title}
              className="w-full h-[300px] object-cover rounded-lg transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className={`absolute inset-0 ${space.overlayColor} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              <h3 className="text-2xl font-bold text-white">{space.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
