import { motion } from 'framer-motion';
import GardenMakeOver from '../assets/garden-makeover.gif';
import SeedlingStarter from '../assets/seedling-starter.gif';
import PlantCare from '../assets/plant-care.gif';
import { Link } from 'react-router-dom';

const GardeningChallenges = () => {
    const challengesData = [
        {
            title: 'Plant Care Challenge',
            description: 'Take care of a plant for 30 days and track its progress.',
            image: PlantCare,
        },
        {
            title: 'Garden Makeover Challenge',
            description: 'Transform your garden into a beautiful oasis.',
            image: GardenMakeOver,
        },
        {
            title: 'Seedling Starter Challenge',
            description: 'Grow seedlings from scratch and nurture them into healthy plants.',
            image: SeedlingStarter,
        },
    ];

    return (
        <section className="bg-gradient-to-r from-color4 to-color9 mx-auto px-6 py-12">
            <h2 className="text-4xl font-bold mb-8 text-white">Challenges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {challengesData.map((challenge, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 rounded-lg p-6 cursor-pointer"
                        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
                    >
                        <img src={challenge.image} alt={challenge.title} className="mb-4 rounded-lg" />
                        <h3 className="text-xl font-bold mb-2 text-white">{challenge.title}</h3>
                        <p className='text-green-400 py-3'>{challenge.description}</p>
                        <Link to="/" className='px-3 py-1 bg-blue-800'>
                            <button className='text-white'>RSVP(Accept Challenge)</button>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default GardeningChallenges;