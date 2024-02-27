import React from 'react';
import Lottie from 'lottie-react';
import down from '../../media/down.json';
import './BackToTopButton.css';

const BackToTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button type="button" className="back-to-top-button" onClick={handleScrollTop}>
      <Lottie animationData={down} className="back-lottie" />
    </button>
  );
};

export default BackToTopButton;
