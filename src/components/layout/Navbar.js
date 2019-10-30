import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to='/'>
            <i className={icon} /> {title}
          </Link>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <Link to='/'>Home</Link>
          </div>
          <div className='navbar-item'>
            <Link to='/about'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Book Finder',
  icon: 'fas fa-book'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
