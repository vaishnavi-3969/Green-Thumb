import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { FaBook, FaComment, FaHome, FaLayerGroup, FaLeaf, FaSeedling, FaUser, FaUsers } from 'react-icons/fa';
import { FiGlobe, FiLogIn, FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="bg-color4 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-white font-bold text-xl">GreenThumb</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-green-100 flex">Home<span className='text-lg m-1'><FaHome/></span></Link>
            <Link to="/my_garden" className="text-white hover:text-green-100 flex">My Gardens<span className='text-lg m-1'><FaLeaf/></span></Link>
            <Link to="/community" className="text-white hover:text-green-100 flex">Community<span className='text-lg m-1'><FiGlobe/></span></Link>
            <Link to="/resources" className="text-white hover:text-green-100 flex">Resources<span className='text-lg m-1'><FaBook/></span></Link>
            <Link to="/profile" className="text-white hover:text-green-100 flex">Profile<span className='text-lg m-1'><FaUser/></span></Link>
            <Link to="/gardening_challenges" className='text-white hover:text-green-100 flex'>Challenges<span className='text-lg m-1'><FaSeedling/></span></Link>
            {isAuthenticated ? (
              <button onClick={() => logout()} className="text-white hover:text-green-100 flex">Logout<span className='text-lg m-1'><FiLogOut/></span></button>
            ) : (
              <button onClick={() => loginWithRedirect()} className="text-white hover:text-green-100">Login<span className='text-lg m-1'><FiLogIn/></span></button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
