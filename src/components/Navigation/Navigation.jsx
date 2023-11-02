import React from "react";
import './Navigation.css';
import a from '../../media/a.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={ a } alt="logo" />
            <div className="menu"></div>
            <button type="button" className="contact-btn">
                <img src="" alt="contact image" />
                Contact Me
            </button>
        </nav>
    );
}

export default Navbar;
