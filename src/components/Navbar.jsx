import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../media/Logo.png';

const Navbar = () => {
  return (
    <div id='navbar'>
      <img src={Logo} id='navbarLogo' />
      <div id='navbarTabs'>
        <div id='navbarTabs-container'>
          <Link to='/'>
            <h2>HOME</h2>
          </Link>
          <Link to='/pricing'>
            <h2>PRICING</h2>
          </Link>
          <Link to='/checkStatus'>
            <h2>ITEM STATUS</h2>
          </Link>
          <Link to='/contact'>
            <h2>CONTACT US</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
