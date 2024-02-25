import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();


  const handleSave = async () => {

  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>
      {isAuthenticated && (
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <img src={user.picture} alt=" " className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold">Name</label>
            <input type="text" value={user.name} className="form-input w-full mt-1" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input type="email" value={user.email} className="form-input w-full mt-1" />
          </div>
          <button onClick={handleSave} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Save</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
