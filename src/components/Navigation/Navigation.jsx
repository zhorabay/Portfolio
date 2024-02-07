import React from 'react';
import './Navigation.css';
import a from '../../media/a.png';

const Navbar = () => (
  <nav className="navbar">
    <img src={a} alt="logo" />
    <div className="menu" />
    <button type="button" className="contact-btn">
      Contact Me
    </button>
  </nav>
);

export default Navbar;
