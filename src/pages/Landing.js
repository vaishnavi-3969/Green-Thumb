import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRightCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Landing = () => {
    const {loginWithPopup} = useAuth0();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-color7'
        >
            <div className="p-10 min-h-screen flex justify-center items-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="max-w-4xl px-8 py-12 bg-white rounded-lg shadow-lg text-center"
                >
                    <h1 className="text-4xl font-bold text-color4 mb-8">Welcome to GreenThumb Community</h1>
                    <p className="text-lg text-gray-800 mb-8">
                        Are you ready to embark on a green journey that not only enriches your life but also contributes to a healthier, more sustainable future for all? Welcome to GreenThumb, your go-to platform for connecting with like-minded gardening enthusiasts, cultivating green spaces, and nurturing vibrant communities.
                    </p>
                    <div className="flex justify-center mb-8">
                        <img src="/images/logo.svg" alt="GreenThumb Logo" className="h-24" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex flex-col justify-center items-center border border-green-300 rounded-lg p-6"
                        >
                            <h2 className="text-2xl font-semibold mb-4">Why GreenThumb?</h2>
                            <p className="text-lg text-gray-800 mb-4">
                                At GreenThumb, we believe in the power of gardening to transform lives and communities. Whether you're a seasoned gardener or a novice enthusiast, GreenThumb provides you with the tools, resources, and community support you need to unleash your green thumb and make a positive impact.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex flex-col justify-center items-center border border-color4 rounded-lg p-6"
                        >
                            <h2 className="text-2xl font-semibold text-color4 mb-4">Key Features:</h2>
                            <ul className="text-lg text-gray-800 mb-4">
                                <li className="mb-2">Create Your Virtual Garden</li>
                                <li className="mb-2">Connect with Community</li>
                                <li className="mb-2">Discover Resources</li>
                                <li className="mb-2">Find Green Spaces</li>
                                <li className="mb-2">Promote Sustainability</li>
                            </ul>
                        </motion.div>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex justify-center mt-8"
                    >
                        <button onClick={loginWithPopup} className="bg-color3 text-white py-3 px-6 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300 ease-in-out">
                            Join the GreenThumb Community Today
                        </button>
                    </motion.div>
                    <div className="mt-8 text-gray-600 text-sm flex items-center justify-center">
                        Ready to Get Started? <button onClick={loginWithPopup} className="text-color3 ml-2">Sign Up Now <FiArrowRightCircle className="inline-block text-xl" /></button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Landing;
