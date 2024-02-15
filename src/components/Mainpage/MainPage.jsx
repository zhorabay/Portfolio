import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import About from '../About/About';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import './MainPage.css';
import prof from '../../media/prof.png';

const MainPage = () => (
  <>
    <section id="mainPage">
      <div className="main-page">
        <div className="main-intro">
          <h2 className="main-h2">
            I&apos;m
            <span> Assem Zhorabay</span>
            ,
          </h2>
          <h2 className="main-h2">Full-stuck Web Developer</h2>
          <p className="main-p">Known for impeccable punctuality, problem-solving skills, and a relentless commitment to meeting deadlines. A year of intensive training in HTML5, CSS3, JavaScript, React, Redux, and Ruby on Rails. Successfully delivered more than 40 projects, adeptly handling both front-end and back-end development aspects. Former teacher and entrepreneur.</p>
        </div>
        <div>
          <img src={prof} alt="logo" className="main-img" />
        </div>
        <div className="follow-me">
          <h4 className="follow">Follow me on:</h4>
          <hr className="hr" />
          <div>
            <a href="https://github.com/zhorabay" className="icons" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/zhorabay" className="icons" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={30} />
            </a>
            <a href="https://medium.com/@assem.zhorabay" className="icons" target="_blank" rel="noopener noreferrer" aria-label="Medium">
              <FaMedium size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section id="aboutSection"><About /></section>
    <section id="projectsSection"><Projects /></section>
    <section id="educationSection"><Education /></section>
    <section id="blogSection"><Blog /></section>
    <section id="contactSection"><Contact /></section>
  </>
);

export default MainPage;
