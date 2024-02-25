import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaBlog, FaNewspaper } from 'react-icons/fa';

const Resources = () => {
  const [news, setNews] = useState([]);
  const resources = [
    { type: 'tutorial', title: 'Community Gardening Tutorial', link: 'https://youtube.com/tutorial1', icon: <FaYoutube /> },
    { type: 'blog', title: 'Benefits of Community Gardening', link: 'https://blog.com/blog', icon: <FaBlog /> },
    { type: 'news', title: 'Latest News on Community Gardening', link: 'https://news.com', icon: <FaNewspaper /> },
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const apiKey = 'd6ffc9b586ad4e46944db8aa0a7c2922';
        const response = await fetch(`https://newsapi.org/v2/everything?q=gardening&apiKey=${apiKey}`);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='bg-gradient-to-r from-color4 to-color1'>
      <div className="max-w-4xl min-h-screen mx-auto py-8 ">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-3">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl mb-4 text-blue-500">{resource.icon}</div>
              <h3 className="text-lg font-semibold">{resource.title}</h3>
              <p className="text-gray-600">{resource.type}</p>
            </motion.a>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl mb-4 text-blue-500"><FaNewspaper /></div>
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-gray-600">{article.source.name}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
