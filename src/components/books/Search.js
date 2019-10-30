import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchBooks: PropTypes.func.isRequired,
    clearBooks: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'warning');
    } else {
      this.props.searchBooks(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { showClear, clearBooks } = this.props;
    return (
      <div className='box'>
        <form onSubmit={this.onSubmit}>
          <div className='field'>
            <div className='control'>
              <input
                className='input'
                type='text'
                name='text'
                value={this.state.text}
                onChange={this.onChange}
                placeholder='Enter Book Name'
              />
            </div>
          </div>
          <div className='field is-grouped'>
            <p className='control'>
              <button type='submit' className='button is-success'>
                Submit
              </button>
            </p>
            {showClear && (
              <p className='control'>
                <button className='button is-danger' onClick={clearBooks}>
                  Clear
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
