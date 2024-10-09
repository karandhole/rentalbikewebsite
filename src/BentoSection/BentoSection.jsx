import React from 'react';
import image1 from '../../src/Images/6.jpg'; // Replace with actual image path
import image2 from '../../src/Images/scooty.png'; // Replace with actual image path
import image3 from '../../src/Images/Battery.webp'; // Replace with actual image path

const BentoSection = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Image Card 1 */}
        <div className="relative">
          <img 
            src={image1} 
            alt="Image 1" 
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Card */}
        <div className="bg-yellow-500 rounded-lg shadow-lg p-8  justify-center items-center">
            <h1 className="text-3xl font-bold text-black pt-8">Grab the benefits !!</h1>
          <p className="text-xl font-bold text-black pt-16">
            Discover the innovative technology behind our latest electric vehicles. Experience the future of mobility with eco-friendly, high-performance models.
          </p>
          <p className="text-xl font-bold text-black pt-8">
            You can get same advantages with our rental services, as Exer Energy is always gives the best in your service..
          </p>
        </div>

        {/* Image Card 2 */}
        <div className="relative">
          <img 
            src={image3} 
            alt="Image 2" 
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Image Card 3 */}
        <div className="relative">
          <img 
            src={image2} 
            alt="Image 3" 
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 h-30"
          />
        </div>
      </div>
    </section>
  );
}

export default BentoSection;
