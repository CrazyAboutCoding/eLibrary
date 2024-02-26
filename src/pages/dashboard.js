import React from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../lib/auth';

const Dashboard = () => {
  const router = useRouter();
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};

export default Dashboard;