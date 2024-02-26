import React from 'react';
import { useRouter } from 'next/router';
import Book from '../../components/Book';
import { isAuthenticated } from '../../lib/auth';

const BookDetail = () => {
  const router = useRouter();
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    router.push('/login');
    return null;
  }

  const book = {
    id: router.query.id,
    title: 'Sample Book',
    author: 'John Doe',
    description: 'This is a sample book description.'
  };

  const handleEdit = () => {
    router.push(`/book/${book.id}/edit`);
  };

  return (
    <div>
      <h1>Book Detail</h1>
      <Book book={book} />
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default BookDetail;