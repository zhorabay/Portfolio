import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import a from '../../media/a.png';

const Navbar = () => (
  <nav className="navbar">
    <img src={a} alt="logo" className="nav-img" />
    <ul className="menu">
      <li className="menu-link"><Link to="/main">Main</Link></li>
      <li className="menu-link"><Link to="/projects">Projects</Link></li>
      <li className="menu-link"><Link to="/education">Education</Link></li>
      <li className="menu-link"><Link to="/experience">Working experiences</Link></li>
    </ul>
    <button type="button" className="contact-btn">
      <Link to="/contact">Contact Me</Link>
    </button>
  </nav>
);

export default Navbar;
