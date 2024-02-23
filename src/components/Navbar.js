import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="bg-green-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-white text-xl font-semibold">GreenThumb</Link>
        <button className="ml-4 text-white hover:text-green-200 focus:outline-none focus:text-green-200">
          <FiMenu className="h-6 w-6" />
        </button>
      </div>
      <div>
        {isAuthenticated ? (
          <button onClick={() => logout({ returnTo: window.location.origin })} className="text-white hover:text-green-200 focus:outline-none">
            Log Out
          </button>
        ) : (
          <button onClick={() => loginWithRedirect()} className="text-white hover:text-green-200 focus:outline-none">Log In</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
