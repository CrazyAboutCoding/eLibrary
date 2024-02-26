import React from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../lib/auth';

const Profile = () => {
  const router = useRouter();
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome to your profile page!</p>
    </div>
  );
};

export default Profile;