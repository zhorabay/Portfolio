import React, { useState } from 'react';
import Lottie from 'lottie-react';
import axios from 'axios';
import Animation from '../../media/Animation.json';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://formspree.io/f/mleqnnad', formData);
      window.location.reload();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="cont-body">
        <Lottie animationData={Animation} className="cont-lottie" />
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" value={formData.name} onChange={handleChange} />

          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" className="form-input" placeholder="john@doe.com" value={formData.email} onChange={handleChange} />

          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message" name="message" className="form-textarea" placeholder="I would like to..." value={formData.message} onChange={handleChange} />

          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
