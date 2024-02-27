import React from 'react';
import Lottie from 'lottie-react';
import developer from '../../media/developer.json';
import teacher from '../../media/teacher.json';
import trainer from '../../media/trainer.json';
import guide from '../../media/guide.json';
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
      <Lottie animationData={developer} className="about-img" />
    </div>
    <div className="experience-2">
      <Lottie animationData={teacher} className="about-img" />
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
      <Lottie animationData={trainer} className="about-img" />
    </div>
    <div className="experience-2">
      <Lottie animationData={teacher} className="about-img" />
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
      <Lottie animationData={guide} className="about-img" />
    </div>
  </div>
);

export default About;
