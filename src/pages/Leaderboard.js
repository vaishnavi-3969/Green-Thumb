import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const mockData = [
      { rank: 1, name: 'John Doe', score: 100 },
      { rank: 2, name: 'Jane Smith', score: 90 },
      { rank: 3, name: 'Michael Johnson', score: 80 },
    ];

    const fetchRandomImages = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        const updatedData = mockData.map((entry, index) => ({
          ...entry,
          image: data.results[index].picture.large,
        }));

        setLeaderboardData(updatedData);
      } catch (error) {
        console.log('Error fetching random images:', error);
        setLeaderboardData(mockData);
      }
    };

    fetchRandomImages();
  }, []);

  return (
    <motion.div
      className="bg-gradient-to-r from-color4 to-color1 text-white p-6 shadow-md"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4">Leaderboard</h2>
      <div className="grid grid-cols-3 gap-4">
        {leaderboardData.map(({ rank, name, score, image }) => (
          <motion.div
            key={rank}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: rank * 0.1, duration: 1.5, type: 'spring' }}
          >
            <div className="flex items-center hover:scale-105">
              <div className="mr-4">
                <h3 className="text-xl font-bold mb-2">{rank}</h3>
                <p className="text-gray-400">{name}</p>
                <p className="text-gray-400">Score: {score}</p>
              </div>
              {image && (
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
            </div>
            {rank === 1 && (
              <div className="text-2xl text-yellow-400">
                <span role="img" aria-label="crown">
                  👑
                </span>
              </div>
            )}
          </motion.div>
        ))}

        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index + 1}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-between opacity-50"
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: (leaderboardData.length + index) * 0.1, duration: 1.5, type: 'spring' }}
          >
            <div className="flex items-center hover:scale-105">
              <div className="mr-4">
                <h3 className="text-xl font-bold mb-2">{leaderboardData.length + index + 1}</h3>
                <p className="text-gray-400">User {leaderboardData.length + index + 1}</p>
                <p className="text-gray-400">Score: {80 - index * 10}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Leaderboard;