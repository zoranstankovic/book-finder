import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookItem = ({ book }) => {
  const imageLink = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : 'https://bulma.io/images/placeholders/96x96.png';
  const description = book.volumeInfo.description
    ? book.volumeInfo.description.substring(0, 120).concat('...')
    : '';
  const authors = book.volumeInfo.authors ? book.volumeInfo.authors : [];
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src={imageLink} alt={book.volumeInfo.title} />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <p className='title is-4'>{book.volumeInfo.title}</p>
            <p className='subtitle is-6'>{authors.join(', ')}</p>
          </div>
        </div>

        <div className='content'>
          {description}
          <br />
          <Link className='button is-primary' to={`/book/${book.id}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookItem;
