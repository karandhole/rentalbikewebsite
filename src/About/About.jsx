import React from 'react'
import mobimage from '../../src/Images/mobimage.jpg'
function About() {
  return (
    <div className='sm:min-h-[600px] sm:grid sm:place-items-center pt-10 sm:pt-16'>
  <div className="container mx-auto">
    <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
      <div>
        <img src={mobimage} alt='' className='w-full sm:w-auto 
        transform transition-transform 
        duration-300 hover:scale-110'/>
      </div>
      <div>
        <div className='space-y-5 sm:space-y-8 pb-6 sm:pb-16'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold font-serif'>
            About <br/>
            <span className='text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-600'>
              EXER ENERGY
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-600'>
            Exer Energy is a leader in the shared electric vehicle space, offering cutting-edge technology, superior vehicle quality, and a strong focus on operational efficiency.
          </p>
          <p className='text-base sm:text-lg md:text-xl text-gray-600'>
            Our commitment to innovation and reliability ensures that cities and riders consistently choose Exer Energy for seamless, eco-friendly transportation solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About
