import React from 'react';
import scooty from '../../src/Images/scooty.png';
import tempo from '../../src/Images/tempo.png';
import cmodel from '../../src/Images/cmodel.png';
import poster2 from '../../src/Images/poster2.jpeg'; // Replace with actual background image

const features = [
  {
    id: 1,
    title: 'EV Cargo Commuter',
    rentStartFrom: '200/- Only',
    range: '100 KM',
    topSpeed: '50 Km/Hr',
    imageUrl: scooty,
  },
  {
    id: 2,
    title: 'EV C-Model',
    rentStartFrom: '299/- Only',
    range: '75 KM',
    topSpeed: '25 Km/Hr',
    imageUrl: cmodel,
  },
  {
    id: 3,
    title: 'EV Cargo Tempo',
    rentStartFrom: '699/- Only',
    range: '150 KM',
    topSpeed: '45 Km/Hr',
    imageUrl: tempo,
  },
];

const Feature = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16">Best Features</h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative bg-yellow-100 shadow-lg rounded-lg p-8 pt-16 transition-transform duration-300 hover:scale-105 min-h-[450px] sm:min-h-[500px]"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-yellow-400 hover:text-yellow-600">
                {feature.title}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl mb-4">
                Rent Start from:{" "}
                <span className="font-semibold">{feature.rentStartFrom}</span>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl mb-4">
                Range: <span className="font-semibold">{feature.range}</span>
              </p>
              <p className="text-lg sm:text-xl md:text-2xl mb-4">
                Top Speed: <span className="font-semibold">{feature.topSpeed}</span>
              </p>

              {/* Larger Image slightly outside the card at the bottom right */}
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="absolute w-48 h-48 sm:w-48 sm:h-48 -bottom-8 -right-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* New Full-Width Background Section */}
      <div
        className="relative w-full h-[650px] bg-cover bg-center"
        style={{ backgroundImage: `url(${poster2})` }} // Background image
      >
        <div className="absolute inset-0 "></div> {/* Optional overlay for better text visibility */}
        <div className="relative h-full flex items-center justify-start px-8 md:px-16 lg:px-24">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl pt-16 font-bold mb-4">Rent the Future of Mobility !!</h2>
            <p className="text-sm sm:text-xl md:text-2xl">
            At Exer Energy, we redefine transportation by offering innovative rental solutions that cater to the evolving needs of modern travelers.
             With our fleet of cutting-edge electric vehicles and eco-friendly options, you can experience seamless mobility while minimizing your carbon footprint.
             <br/> Our user-friendly booking platform ensures a hassle-free experience, 
            allowing you to choose from a diverse range of vehicles tailored to your lifestyle and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
