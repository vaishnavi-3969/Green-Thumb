import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Error 404</h1>
      <p className="text-lg text-gray-800 mb-8">Oops! Page not found.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go back to home</Link>
    </div>
  );
};

export default Error;
