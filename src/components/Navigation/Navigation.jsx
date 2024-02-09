import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navbar = () => (
  <nav className="navbar">
    <ul className="menu">
      <li className="menu-link"><Link className="menu-link-l" to="/">Home</Link></li>
      <li className="menu-link"><Link className="menu-link-l" to="/about">About</Link></li>
      <li className="menu-link"><Link className="menu-link-l" to="/projects">Projects</Link></li>
      <li className="menu-link"><Link className="nav-name" to="/">A</Link></li>
      <li className="menu-link"><Link className="menu-link-l" to="/education">Education</Link></li>
      <li className="menu-link"><Link className="menu-link-l" to="/blog">Blog</Link></li>
      <li className="menu-link"><Link className="menu-link-l" to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
