import React from 'react';
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
      <button type="button" className="cv-btn">Download CV</button>
    </div>
    <img src={prof} alt="logo" className="main-img" />
    <div className="follow-me">
      <h4 className="follow">Follow me on:</h4>
      <hr className="hr" />
      <p>f</p>
    </div>
  </div>
);

export default MainPage;
