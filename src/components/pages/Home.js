import React, { Fragment } from 'react';
import Search from '../books/Search';
import Books from '../books/Books';

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Books />
    </Fragment>
  );
};

export default Home;
