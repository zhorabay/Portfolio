import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  };

  render() {
    const { clicked } = this.state;

    return (
      <>
        <nav id="navbar" className={clicked ? '#navbar active' : '#navbar'}>
          <ul className="menu">
            <li className="menu-link">
              <Link className="menu-link-l" to="/">
                Home
              </Link>
            </li>
            <li className="menu-link">
              <Link className="menu-link-l" to="/about">
                About
              </Link>
            </li>
            <li className="menu-link">
              <Link className="menu-link-l" to="/projects">
                Projects
              </Link>
            </li>
            <li className="menu-link">
              <Link className="nav-name" to="/">
                AZ
              </Link>
            </li>
            <li className="menu-link">
              <Link className="menu-link-l" to="/education">
                Education
              </Link>
            </li>
            <li className="menu-link">
              <Link className="menu-link-l" to="/blog">
                Blog
              </Link>
            </li>
            <li className="menu-link">
              <Link className="menu-link-l" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div
          id="mobile"
          onClick={this.handleClick}
          onKeyPress={this.handleKeyPress}
          role="button"
          tabIndex={0}
        >
          <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </>
    );
  }
}

export default Navbar;
