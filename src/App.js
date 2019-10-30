import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Books from './components/books/Books';
import Search from './components/books/Search';
import Alert from './components/layout/Alert';

import './App.scss';

class App extends Component {
  state = {
    books: [],
    loading: false,
    alert: null
  };

  searchBooks = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}`
    );
    this.setState({ books: res.data.items, loading: false });
  };

  clearBooks = () => this.setState({ books: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  render() {
    const { books, loading } = this.state;
    return (
      <section className='section'>
        <div className='container'>
          <Navbar />
          <Alert alert={this.state.alert} />
          <Search
            searchBooks={this.searchBooks}
            clearBooks={this.clearBooks}
            showClear={books.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Books loading={loading} books={books} />
        </div>
      </section>
    );
  }
}

export default App;
