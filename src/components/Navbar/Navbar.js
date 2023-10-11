import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';


function Navbar() {
    return (
      <nav className="navbar">
        <img src={logo} alt="Follower Analytics Logo" className="navbar-logo" />
        <span>Follower Analytics</span>
      </nav>
    );
  }
  
  export default Navbar;
