import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../media/Logo.png';

const Navbar = () => {
  return (
    <div id='navbar'>
      <Link to='/'>
        <img src={Logo} id='navbarLogo' />
      </Link>
      <div id='navbarTabs'>
        <div id='navbarTabs-container'>
          <Link to='/' className='tab'>
            <h2>HOME</h2>
          </Link>
          <NavLink to='/pricing' className='tab' >
            <h2>PRICING</h2>
          </NavLink>
          <NavLink to='/checkStatus' className='tab'>
            <h2>ITEM STATUS</h2>
          </NavLink>
          <NavLink to='/contact' className='tab'>
            <h2>CONTACT US</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
