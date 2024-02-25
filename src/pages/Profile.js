import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { database } from '../components/Firebase';
import { ref, set, get } from 'firebase/database';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [favoritePlants, setFavoritePlants] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [profession, setProfession] = useState('');
  const [socialMediaPlatforms, setSocialMediaPlatforms] = useState([
    { name: 'Twitter', link: '' },
    { name: 'Facebook', link: '' },
    { name: 'Instagram', link: '' },
  ]);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      const generatedUsername = user.email.split('@')[0].replace(/\./g, '_');
      setUsername(generatedUsername);

      const fetchData = async () => {
        try {
          const snapshot = await get(ref(database, 'users/' + generatedUsername));
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setLocation(userData.location || '');
            setBio(userData.bio || '');
            setFavoritePlants(userData.favoritePlants || '');
            setProfession(userData.profession || '');
            if (userData.socialMediaPlatforms) {
              setSocialMediaPlatforms(userData.socialMediaPlatforms);
            }
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchData();
    }
  }, [user]);

  const handleSave = async () => {
    try {
      set(ref(database, 'users/' + username), {
        username: username,
        name: name,
        email: email,
        bio: bio,
        location: location,
        favoritePlants: favoritePlants,
        profession: profession,
        socialMediaPlatforms: socialMediaPlatforms,
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
      const generatedUsername = user.email.split('@')[0].replace(/\./g, '_');
      setUsername(generatedUsername);
    }
  }, [user])

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <div className='flex justify-center items-center min-h-screen bg-color4'>
        <div className="block min-w-[700px] px-4 py-8 text-center">
          <h1 className="text-3xl font-semibold mb-4 text-yellow-300">Profile</h1>
          {isAuthenticated && (
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <img src={user.picture} alt={user.name} className="w-12 h-12 rounded-full" />
                <div className='text-center'>
                  <h2 className="text-xl font-semibold text-white">{name}</h2>
                  <p className="text-gray-600 text-gray-300">{email}</p>
                </div>
              </div>
              <div className='p-3 bg-gray-100 rounded m-1'>
                <label className="block text-sm font-semibold">Username</label>
                {username}
              </div>
              <div className='p-3 bg-gray-100 rounded m-1'>
                <label className="block text-sm font-semibold">About Me</label>
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} className="form-textarea w-full mt-1" />
              </div>
              <div className='p-3 bg-gray-100 rounded m-1'>
                <label className="block text-sm font-semibold">Location</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-input w-full mt-1" />
              </div>
              <div className='p-3 bg-gray-100 rounded m-1'>
                <label className="block text-sm font-semibold">Profession</label>
                <input type="text" value={profession} onChange={(e) => setProfession(e.target.value)} className="form-input w-full mt-1" />
              </div>
              <div className='p-3 bg-gray-100 rounded m-1'>
                <label className="block text-sm font-semibold">Favorite Plants</label>
                <input type="text" value={favoritePlants} onChange={(e) => setFavoritePlants(e.target.value)} className="form-input w-full mt-1" />
              </div>
              <div className='p-3 bg-gray-100 rounded m-1'>
                <label className="block text-sm font-semibold">My Garden Scrapbook</label>
              </div>
              <div className='p-3 bg-gray-100 rounded m-1'>
                <label className="block text-sm font-semibold">Social Media Platforms</label>
                {socialMediaPlatforms.map((platform, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <label className="block text-sm font-semibold">{platform.name}</label>
                    <input type="text" value={platform.link} onChange={(e) => {
                      const updatedPlatforms = [...socialMediaPlatforms];
                      updatedPlatforms[index].link = e.target.value;
                      setSocialMediaPlatforms(updatedPlatforms);
                    }} className="form-input w-full mt-1" />
                  </div>
                ))}
              </div>
              <button onClick={handleSave} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Save</button>
            </div>

          )}
        </div>
      </div>
      <div className='flex flex-row'>
        <div className="justify-center w-full">
          <img src="/images/flowers.gif" alt="Profile" className="h-96" />
        </div>
        <div className="justify-center w-full">
          <img src="/images/flowers.gif" alt="Profile" className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
