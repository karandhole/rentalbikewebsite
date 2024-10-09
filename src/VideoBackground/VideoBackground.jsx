import React from 'react';
import sampleVideo from '../../src/Images/videocharging.mp4'; // Replace with your video file path

const VideoBackground = () => {
  return (
    <>
     <section className="container mx-auto px-4 py-12">
      
      {/* Information Text */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold mb-4">Have a Great Feature Of Swapper Battery</h2>
        <p className="text-2xl text-gray-700">
         You can remove battery from vehicle, charge it and fix it..and within 2 hours you will get 0 to 100% charged battery !!
        </p>
      </div>

      {/* Flexbox for Images */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        
        {/* Image 1 */}
        {/* <div className="w-full md:w-1/2">
          <img 
            src={Battery} 
            alt="Model 1" 
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div> */}

        {/* Image 2 */}
        {/* <div className="w-full md:w-1/2">
          <img 
            src={scooty} 
            alt="Model 2" 
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div> */}
      </div>
    </section>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={sampleVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-end pb-24 px-8">
        <h1 className="text-white text-3xl md:text-4xl font-semibold pt-8">
          Supercharge Your EV 3-Wheeler, just in 15 mins from 0 to 100% !!
        </h1>
      </div>
    </div>
    </>
  );
};

export default VideoBackground;
