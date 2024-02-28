import React, { Component } from 'react';
import { Link as ScrollLink } from 'react-scroll';
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
              <ScrollLink
                activeClass="active"
                to="mainPage"
                spy
                smooth
                offset={-70}
                duration={500}
                className="menu-link-l"
                onClick={this.handleLinkClick}
              >
                Home
              </ScrollLink>
            </li>
            <li className="menu-link">
              <ScrollLink
                activeClass="active"
                to="aboutSection"
                spy
                smooth
                offset={-70}
                duration={500}
                className="menu-link-l"
                onClick={this.handleLinkClick}
              >
                Experience
              </ScrollLink>
            </li>
            <li className="menu-link">
              <ScrollLink
                activeClass="active"
                to="projectsSection"
                spy
                smooth
                offset={-70}
                duration={500}
                className="menu-link-l"
                onClick={this.handleLinkClick}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="menu-link-name">
              <ScrollLink
                activeClass="active"
                to="mainPage"
                spy
                smooth
                offset={-70}
                duration={500}
                className="nav-name"
              >
                AZ
              </ScrollLink>
            </li>
            <li className="menu-link">
              <ScrollLink
                activeClass="active"
                to="educationSection"
                spy
                smooth
                offset={-70}
                duration={500}
                className="menu-link-l"
                onClick={this.handleLinkClick}
              >
                Education
              </ScrollLink>
            </li>
            <li className="menu-link">
              <ScrollLink
                activeClass="active"
                to="blogSection"
                spy
                smooth
                offset={-70}
                duration={500}
                className="menu-link-l"
                onClick={this.handleLinkClick}
              >
                Blog
              </ScrollLink>
            </li>
            <li className="menu-link">
              <ScrollLink
                activeClass="active"
                to="contactSection"
                spy
                smooth
                offset={-70}
                duration={500}
                className="menu-link-l"
                onClick={this.handleLinkClick}
              >
                Contact
              </ScrollLink>
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
