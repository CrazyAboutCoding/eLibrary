import React from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../../../lib/auth';

const AdminBookDetail = () => {
  const router = useRouter();
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    router.push('/login');
    return null;
  }

  const book = {
    id: router.query.id,
    title: 'The Inheritance Games',
    author: 'Jennifer Lynn Barnes',
    description: 'Inheritance Games, 1st book.'
  };

  return (
    <div>
      <h1>Admin Book Detail</h1>
      <p>Edit the details of the book with ID: {book.id}</p>
    </div>
  );
};

export default AdminBookDetail;