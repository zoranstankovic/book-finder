import React, { useReducer } from 'react';
import axios from 'axios';
import GoogleBooksContext from './googleBooksContext';
import GoogleBooksReducer from './googleBooksReducer';
import { SEARCH_BOOKS, SET_LOADING, CLEAR_BOOKS, GET_BOOK } from '../types';

let googleBooksApiKey;

if (process.env.NODE_ENV !== 'production') {
  googleBooksApiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
} else {
  googleBooksApiKey = process.env.GOOGLE_BOOKS_API_KEY;
}

const GoogleBooksState = props => {
  const initialState = {
    books: [],
    book: {},
    loading: false
  };

  const [state, dispatch] = useReducer(GoogleBooksReducer, initialState);

  // Search Books
  const searchBooks = async text => {
    setLoading();
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&key=${googleBooksApiKey}`
    );

    dispatch({
      type: SEARCH_BOOKS,
      payload: res.data.items
    });
  };

  // Get Book
  const getBook = async id => {
    setLoading();
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${googleBooksApiKey}`
    );

    dispatch({
      type: GET_BOOK,
      payload: res.data.volumeInfo
    });
  };

  // Clear Books
  const clearBooks = () =>
    dispatch({
      type: CLEAR_BOOKS
    });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GoogleBooksContext.Provider
      value={{
        books: state.books,
        book: state.book,
        loading: state.loading,
        searchBooks,
        clearBooks,
        getBook
      }}
    >
      {props.children}
    </GoogleBooksContext.Provider>
  );
};

export default GoogleBooksState;
