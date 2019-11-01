import { SEARCH_BOOKS, SET_LOADING, CLEAR_BOOKS, GET_BOOK } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
        loading: false
      };
    case CLEAR_BOOKS:
      return {
        ...state,
        books: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
