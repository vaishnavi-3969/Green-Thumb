import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="bg-green-500 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-white font-bold text-xl">GreenThumb</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-green-100">Home</Link>
            <Link to="/my_garden" className="text-white hover:text-green-100">My Gardens</Link>
            <Link to="/community" className="text-white hover:text-green-100">Community</Link>
            <Link to="/resources" className="text-white hover:text-green-100">Resources</Link>
            <Link to="/profile" className="text-white hover:text-green-100">Profile</Link>
            {isAuthenticated ? (
              <button onClick={() => logout()} className="text-white hover:text-green-100">Logout</button>
            ) : (
              <button onClick={() => loginWithRedirect()} className="text-white hover:text-green-100">Login</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
