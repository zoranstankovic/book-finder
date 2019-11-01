import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import GoogleBooksContext from '../../context/googleBooks/googleBooksContext';

const Book = ({ match }) => {
  const googleBooksContext = useContext(GoogleBooksContext);

  const { book, loading, getBook } = googleBooksContext;
  useEffect(() => {
    getBook(match.params.id);
    // eslint-disable-next-line
  }, []);

  const authors = book.authors ? book.authors : [];
  const imageLink = book.imageLinks
    ? book.imageLinks.medium
    : 'https://bulma.io/images/placeholders/96x96.png';

  if (loading)
    return (
      <div className='pageloader'>
        <span className='title'>Loading</span>
      </div>
    );
  return (
    <section className='section'>
      <div className='container'>
        <Link to='/'>Back to Search</Link>
        <h1 className='title'>{book.title}</h1>
        <h2 className='subtitle'>{book.subtitle}</h2>
        <img src={imageLink} alt={book.title} />
        <p className='subtitle is-6'>Author(s): {authors.join(', ')}</p>
        <p className='subtitle is-6'>Publisher: {book.publishers}</p>
        <p className='subtitle is-6'>Published: {book.publishedDate}</p>
        <p>{book.description}</p>
        <a href={book.infoLink} target='_blank' rel='noopener noreferrer'>
          Link to Google Page
        </a>
      </div>
    </section>
  );
};

export default Book;
