import React from 'react';
import BookItem from './BookItem';
import PropTypes from 'prop-types';

const Books = ({ loading, books }) => {
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

Books.propTypes = {
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Books;
