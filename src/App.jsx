import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import About from './About/About'
import Feature from './Feature/Feature'
import Location from './Location/Location'
import BrandLogos from './BrandLogos/BrandLogos'
import VideoBackground from './VideoBackground/VideoBackground'
import Footer from './Footer/Footer'
import BentoSection from './BentoSection/BentoSection'



function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
    <Feature/>
    <About/>
    <BentoSection/>
    <VideoBackground/>
    <Location/>
    <BrandLogos/>
    <Footer/>
   
    </div>
  )
}

export default App
