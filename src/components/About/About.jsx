import React from 'react';
import tutor from '../../media/tutor.jpeg';
import teach from '../../media/teach.webp';
import guide from '../../media/guide.jpeg';
import dev from '../../media/dev.avif';
import './About.css';

const About = () => (
  <div className="about">
    <h2>Work Experience</h2>
    <div className="experience-1">
      <div className="card-f">
        <h3>Full-stack Developer</h3>
        <p>Self-employed</p>
        <p>Aug 2023 - Present</p>
        <p>Romania · Remote</p>
      </div>
      <img src={dev} alt="dev" className="about-img" />
    </div>
    <div className="experience-2">
      <img src={teach} alt="teach" className="about-img" />
      <div className="card-f">
        <h3>English Language Teacher</h3>
        <p>ICHB Colentina · Full-time</p>
        <p>Aug 2022 - Feb 2023</p>
        <p>Bucharest, Romania</p>
      </div>
    </div>
    <div className="experience-1">
      <div className="card-f">
        <h3>IELTS Trainer</h3>
        <p>IELTS with Assem · Self-employed</p>
        <p>Nov 2021 - Aug 2022</p>
        <p>Kyiv, Ukraine</p>
      </div>
      <img src={tutor} alt="tutor" className="about-img" />
    </div>
    <div className="experience-2">
      <img src={teach} alt="teach" className="about-img" />
      <div className="card-f">
        <h3>English Language Teacher</h3>
        <p>SPECTRUM INTERNATIONAL SCHOOL · Full-time</p>
        <p>Aug 2019 - Aug 2021</p>
        <p>Astana, Kazakhstan</p>
      </div>
    </div>
    <div className="experience-1">
      <div className="card-f">
        <h3>Guide in EXPO exhibition</h3>
        <p>Sphere Events · Full-time</p>
        <p>May 2017 - Sep 2017</p>
        <p>Astana, Kazakhstan</p>
      </div>
      <img src={guide} alt="guide" className="about-img" />
    </div>
  </div>
);

export default About;
