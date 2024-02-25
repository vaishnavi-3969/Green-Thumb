import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTree } from 'react-icons/fa'; 

const MoveToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        setIsVisible(scrolled > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.button
            className={`fixed bottom-6 right-6 p-3 bg-green-500 text-white rounded-full shadow-lg transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <FaTree className="text-sm" />
        </motion.button>
    );
};

export default MoveToTop;
