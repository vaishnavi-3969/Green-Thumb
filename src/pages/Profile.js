import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { database } from '../components/Firebase';
import { ref, set } from 'firebase/database';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [favoritePlants, setFavoritePlants] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleSave = async () => {
    try {
      set(ref(database, 'users/' + username), {
        username: username,
        name: name,
        email: email,
        bio: bio,
        location: location,
        favoritePlants: favoritePlants
      })
      alert("Saved Successfullly")
    } catch (err) {
      alert(err)
    }
  };


  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user])

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>
      {isAuthenticated && (
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <img src={user.picture} alt={user.name} className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-gray-600">{email}</p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold">Enter Username (can only contain alphabets)</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-textarea w-full mt-1" />
          </div>
          <div>
            <label className="block text-sm font-semibold">About Me</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="form-textarea w-full mt-1" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Location</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-input w-full mt-1" />
          </div>
          <div>
            <label className="block text-sm font-semibold">Favorite Plants</label>
            <input type="text" value={favoritePlants} onChange={(e) => setFavoritePlants(e.target.value)} className="form-input w-full mt-1" />
          </div>
          <div>
            <label className="block text-sm font-semibold">My Garden Scrapbook</label>
          </div>
          <button onClick={handleSave} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Save</button>
        </div>

      )}
    </div>
  );
};

export default Profile;
