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

  handleLinkClick = () => {
    this.setState({ clicked: false });
  };

  render() {
    const { clicked } = this.state;

    return (
      <>
        <nav id="navbar" className={clicked ? '#navbar active' : '#navbar'}>
          <ul className="menu">
            <li className="menu-link">
              <Link className="menu-link-l" to="/" onClick={this.handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="menu-link">
              <Link className="menu-link-l" to="/about" onClick={this.handleLinkClick}>
                About
              </Link>
            </li>
            <li className="menu-link">
              <Link className="menu-link-l" to="/projects" onClick={this.handleLinkClick}>
                Projects
              </Link>
            </li>
            <li className="menu-link">
              <Link className="nav-name" to="/" onClick={this.handleLinkClick}>
                AZ
              </Link>
            </li>
            <li className="menu-link">
              <Link className="menu-link-l" to="/education" onClick={this.handleLinkClick}>
                Education
              </Link>
            </li>
            <li className="menu-link">
              <Link className="menu-link-l" to="/blog" onClick={this.handleLinkClick}>
                Blog
              </Link>
            </li>
            <li className="menu-link">
              <Link className="menu-link-l" to="/contact" onClick={this.handleLinkClick}>
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
