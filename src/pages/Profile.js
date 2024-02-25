import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { app } from '../components';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {isAuthenticated && userData && (
        <div>
          <img src={userData.picture} alt={userData.name} />
          <h2>{userData.name}</h2>
          <p>{userData.email}</p>
          
        </div>
      )}
    </div>
  );
};

export default Profile;
