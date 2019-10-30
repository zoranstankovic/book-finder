import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Books from './components/books/Books';
import Search from './components/books/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Book from './components/books/Book';

import './App.scss';

class App extends Component {
  state = {
    books: [],
    book: {},
    loading: false,
    alert: null
  };

  searchBooks = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
    );
    this.setState({ books: res.data.items, loading: false });
  };

  clearBooks = () => this.setState({ books: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  getBook = async id => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
    );
    this.setState({ book: res.data.volumeInfo, loading: false });
  };
  render() {
    const { book, books, loading } = this.state;
    return (
      <Router>
        <section className='section'>
          <div className='container'>
            <Navbar />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Alert alert={this.state.alert} />
                    <Search
                      searchBooks={this.searchBooks}
                      clearBooks={this.clearBooks}
                      showClear={books.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Books loading={loading} books={books} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/book/:id'
                render={props => (
                  <Book
                    {...props}
                    book={book}
                    getBook={this.getBook}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
