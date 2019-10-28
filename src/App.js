import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Books from './components/books/Books';

import './App.scss';

class App extends Component {
  state = {
    books: [],
    loading: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      'https://www.googleapis.com/books/v1/volumes?q=quilting'
    );
    this.setState({ books: res.data.items, loading: false });
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <Books loading={this.state.loading} books={this.state.books} />
      </Fragment>
    );
  }
}

export default App;
