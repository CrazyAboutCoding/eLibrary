import React from 'react';
import Book from './Book';

const BooksList = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;