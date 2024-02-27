import React from 'react';
import Lottie from 'lottie-react';
import study from '../../media/study.json';
import './Education.css';

const Education = () => (
  <div className="about">
    <h2>My Education</h2>
    <div className="experience-1">
      <div className="card-f">
        <h3>Microverse</h3>
        <p>Remote Full Stack Web Development Program</p>
        <p>June 2023 - Feb 2024</p>
      </div>
      <Lottie animationData={study} className="about-img" />
    </div>
    <div className="experience-2">
      <Lottie animationData={study} className="about-img" />
      <div className="card-f">
        <h3>Syrdarya University</h3>
        <p>Master of Education - MEd, English/Language Arts Teacher</p>
        <p>Sep 2019 - Jul 2021</p>
      </div>
    </div>
    <div className="experience-1">
      <div className="card-f">
        <h3>L.N.Gumilyov Eurasian National University</h3>
        <p>Bachelor of Education - BEd, Teaching English as a Second or Foreign Language</p>
        <p>Sep 2015 - Jul 2019</p>
      </div>
      <Lottie animationData={study} className="about-img" />
    </div>
  </div>
);

export default Education;
