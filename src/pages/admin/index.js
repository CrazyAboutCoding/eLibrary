import React from 'react';
import { useRouter } from 'next/router';
// import { isAuthenticated } from '../../lib/auth';

const Admin = () => {
  const router = useRouter();
  const isLoggedIn = () => {
    const user = localStorage.getItem('user');
    return user !== null;
};

  if (!isLoggedIn) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
    </div>
  );
};

export default Admin;