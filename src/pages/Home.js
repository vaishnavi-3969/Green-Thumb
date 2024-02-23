import React from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="bg-green-100 min-h-screen">
     
      <div className="px-4 py-16 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 120 }}
          className="text-4xl font-bold text-green-900 mb-8"
        >
          Grow Your Passion for Gardening
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, type: 'spring', stiffness: 120 }}
          className="text-lg text-gray-800 mb-8"
        >
          GreenThumb is your ultimate platform to connect with fellow gardening enthusiasts, discover resources, and cultivate vibrant green spaces.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          onClick={() => loginWithRedirect()}
          className="bg-green-500 text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300 ease-in-out"
        >
          Get Started
        </motion.button>
      </div>
      
      <div className="bg-green-200 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-center border border-green-300 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Virtual Garden Creation</h3>
              <p className="text-lg text-gray-800 mb-4">
                Design and manage your virtual garden, plan planting schedules, and track gardening tasks with ease.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border border-green-300 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Community Interaction</h3>
              <p className="text-lg text-gray-800 mb-4">
                Connect with like-minded gardeners, join discussions, and share tips and experiences within the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
