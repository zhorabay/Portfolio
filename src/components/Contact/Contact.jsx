import React from 'react';
import Lottie from 'lottie-react';
import Animation from '../../media/Animation.json';
import './Contact.css';

const Contact = () => (
  <div className="contact">
    <h2>My Contacts</h2>
    <div className="cont-body">
      <Lottie animationData={Animation} className="cont-lottie" />
      <p>Email address: assem.zhorabay@gmail.com</p>
    </div>
  </div>
);

export default Contact;
