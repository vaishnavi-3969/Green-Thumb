import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Connect with us</h3>
          <div className="flex justify-center md:justify-start mt-2">
            <a href="https://facebook.com" className="mr-4">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" className="mr-4">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} GreenThumb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
