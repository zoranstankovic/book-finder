import React, { useState, useContext } from 'react';
import GoogleBooksContext from '../../context/googleBooks/googleBooksContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const googleBooksContext = useContext(GoogleBooksContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'warning');
    } else {
      googleBooksContext.searchBooks(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);
  return (
    <div className='box'>
      <form onSubmit={onSubmit}>
        <div className='field'>
          <div className='control'>
            <input
              className='input'
              type='text'
              name='text'
              value={text}
              onChange={onChange}
              placeholder='Enter Book Title or Author Name'
            />
          </div>
        </div>
        <div className='field is-grouped'>
          <p className='control'>
            <button type='submit' className='button is-success'>
              Submit
            </button>
          </p>
          {googleBooksContext.books.length > 0 && (
            <p className='control'>
              <button
                className='button is-danger'
                onClick={googleBooksContext.clearBooks}
              >
                Clear
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
