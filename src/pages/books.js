import React from 'react';
import { useRouter } from 'next/router';
import BooksList from '../components/BooksList';
import { isAuthenticated } from '../lib/auth';
import { books } from '../lib/booksData';

const Books = () => {
  const router = useRouter();
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    router.push('/login');
    return null;
  }

  return (
    <div>
      <h1>Books</h1>
      <BooksList books={books} />
    </div>
  );
};

export default Books;