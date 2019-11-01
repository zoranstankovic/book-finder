import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Book from './components/books/Book';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

import GoogleBooksState from './context/googleBooks/GoogleBooksState';
import AlertState from './context/alert/AlertState';

import './App.scss';

const App = () => {
  return (
    <GoogleBooksState>
      <AlertState>
        <Router>
          <section className='section'>
            <div className='container'>
              <Navbar />
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/book/:id' component={Book} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </section>
        </Router>
      </AlertState>
    </GoogleBooksState>
  );
};

export default App;
