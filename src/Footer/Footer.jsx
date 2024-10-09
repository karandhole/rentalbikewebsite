import React from 'react';
import logo from '../../src/Images/Logo.png'; // Replace with actual logo path
import rightImage from '../../src/Images/exerchar2.png'; // Replace with actual image path

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-black py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center space-y-8">
        
        {/* Left Section: Logo */}
        <div className="w-full md:w-1/4 flex justify-start">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Middle Section: Links and Contact Info */}
        <div className="w-full md:w-2/4 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Links Section */}
          <div>
            <ul className="space-y-4 text-lg md:text-xl">
              <li>
                <a href="/about" className="font-semibold hover:underline">About Us</a>
              </li>
              <li>
                <a href="/services" className=" font-semibold hover:underline">Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="text-lg md:text-xl">
            <p className="font-semibold">Contact Us:</p>
            <p className="font-bold" >Email: sales@exerenergy.com </p>
            <p className="font-bold">Phone: +91 8956301541</p>
            <p className="font-bold">Phone: +91 8956301542</p>
          </div>

        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/4 flex justify-end">
          <img src={rightImage} alt="Footer Image" className="h-34 w-auto" />
        </div>
      </div>

      {/* Bottom Section: Copyright and Privacy Policy */}
      <div className="border-t border-black mt-8 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
