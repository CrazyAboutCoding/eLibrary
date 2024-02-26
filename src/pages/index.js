import React from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../lib/auth';

const Home = () => {
  const router = useRouter();
  const isLoggedIn = isAuthenticated();

  if (isLoggedIn) {
    router.push('/dashboard');
    return null;
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the eLibrary application!</p>
    </div>
  );
};

export default Home;