import React from 'react';
import './BrandLogos.css';
import logo1 from '../../src/Images/logos/Amazon.png';
import logo2 from '../../src/Images/logos/aramex.png'
import logo3 from '../../src/Images/logos/Bigbasket.png'
import logo4 from '../../src/Images/logos/Dotzot.png'
import logo5 from '../../src/Images/logos/DTDC.png'
import logo6 from '../../src/Images/logos/Dunzo.png'
import logo7 from '../../src/Images/logos/lo1.png'
import logo8 from '../../src/Images/logos/lo2.png'
import logo9 from '../../src/Images/logos/lo3.png'
import logo10 from '../../src/Images/logos/lo4.png'
import logo11 from '../../src/Images/logos/lo5.png'
import logo12 from '../../src/Images/logos/Grofers.png'
import logo13 from '../../src/Images/logos/Shadowfax.png'
import logo14 from '../../src/Images/logos/Wefast.png'
import logo15 from '../../src/Images/logos/Xpressbees.png'
import logo16 from '../../src/Images/logos/Gojavas.png'

const logos = [
  logo1, logo2, logo3, logo4,
  logo5, logo6,logo7,logo8,logo9,logo10,logo11, logo12,
  logo13, logo14, logo15, logo16
];

const BrandLogos = () => {
  return (
    <div className="py-8 bg-gray-100 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-4">Our Trusted Partners</h2>
      <div className="flex  space-x-4 animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-32 md:w-40">
            <img
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
