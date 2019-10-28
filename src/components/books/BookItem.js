import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book }) => {
  const imageLink = book.imageLinks
    ? book.imageLinks.thumbnail
    : 'https://bulma.io/images/placeholders/96x96.png';
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src={imageLink} alt={book.title} />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <p className='title is-4'>{book.title}</p>
            <p className='subtitle is-6'>{book.authors.join(', ')}</p>
          </div>
        </div>

        <div className='content'>
          {book.description.substring(0, 120).concat('...')}
          <br />
          <a className='button is-primary' href={book.infoLink}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookItem;
