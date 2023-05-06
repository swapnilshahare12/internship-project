import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='container-fluid'>
          <div className='logodiv'>
            <Link to='/'>
              <img
                id='logo'
                src='https://static.tvmaze.com/images/tvm-header-logo.png'
                alt='TVmaze'
                title='Keep track of your shows. TV calendar, TV watchlist, TV information database, REST TV API and more.'
              />
            </Link>
          </div>

          <form className='d-flex' role='search'>
            <input
              className='form-control'
              type='search'
              placeholder='Search Shows And People'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              <i className='bi bi-search'></i>
            </button>
          </form>
          <div className='right-div'>
            <Link className='access' href='/account/login'>
              Login
            </Link>
            <Link className='access' href='/account/register'>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar