import React from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../../../lib/auth';

const AdminUserDetail = () => {
  const router = useRouter();
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    router.push('/login');
    return null;
  }

  const user = {
    id: router.query.id,
    email: 'user@example.com',
    password: '********'
  };

  return (
    <div>
      <h1>Admin User Detail</h1>
      <p>Edit the details of the user with ID: {user.id}</p>
    </div>
  );
};

export default AdminUserDetail;