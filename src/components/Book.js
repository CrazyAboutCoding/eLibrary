import React from 'react';

const Book = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
    </div>
  );
};

export default Book;