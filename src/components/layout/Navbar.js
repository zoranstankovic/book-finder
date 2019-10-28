import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <i className={icon} /> {title}
          </a>
          <span className='navbar-burger burger' datatarget='navbarMenu'>
            <span></span>
            <span></span>
            <span></span>
          </span>
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
