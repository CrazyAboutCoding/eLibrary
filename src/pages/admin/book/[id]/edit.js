import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../../../lib/auth';

const EditBook = () => {
  const router = useRouter();
  const isLoggedIn = isAuthenticated();

  if (!isLoggedIn) {
    router.push('/login');
    return null;
  }

  const bookId = router.query.id;

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`/api/books/${bookId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, description }),
    });

    if (response.ok) {
      router.push(`/book/${bookId}`);
    } else {
      console.error('Failed to update book');
    }
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBook;