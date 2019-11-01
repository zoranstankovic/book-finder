import React, { useContext } from 'react';
import BookItem from './BookItem';
import GoogleBooksContext from '../../context/googleBooks/googleBooksContext';

const Books = () => {
  const googleBooksContext = useContext(GoogleBooksContext);

  const { loading, books } = googleBooksContext;
  if (loading) {
    return (
      <div className='pageloader'>
        <span className='title'>Loading</span>
      </div>
    );
  } else {
    return (
      <div className='columns is-multiline'>
        {books.map(book => (
          <div className='column is-one-third' key={book.id}>
            <BookItem book={book} />
          </div>
        ))}
      </div>
    );
  }
};

export default Books;
