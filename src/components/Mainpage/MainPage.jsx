import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import './MainPage.css';
import prof from '../../media/prof.png';

const MainPage = () => (
  <div className="main-page">
    <div className="main-intro">
      <h2 className="main-h2">
        I&apos;m
        <span> Assem Zhorabay</span>
        ,
      </h2>
      <h2 className="main-h2">Full-stuck Web Developer</h2>
      <p className="main-p">A full-stuck software developer. A full-stuck software developer. A full-stuck software developer.</p>
      <a className="resume-l" href="https://docs.google.com/document/d/1UPe6f3av9-H3O1piw2bIIDJs0mJCB2GSdUAo9DyOxRA/edit?usp=sharing"><button type="button" className="cv-btn">Resume</button></a>
    </div>
    <div>
      <img src={prof} alt="logo" className="main-img" />
    </div>
    <div className="follow-me">
      <h4 className="follow">Follow me on:</h4>
      <hr className="hr" />
      <div>
        <a href="https://github.com/zhorabay" className="icons" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/zhorabay" className="icons" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://medium.com/@assem.zhorabay" className="icons" target="_blank" rel="noopener noreferrer">
          <FaMedium size={30} />
        </a>
      </div>
    </div>
  </div>
);

export default MainPage;
