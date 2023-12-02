// src/LandingPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleTakeTest = () => {
    navigate('/test');  // Redirect to the TestPage
  };

  useEffect(() => {
    // Add the 'show' class after the component mounts
    document.querySelector('.landing-page').classList.add('show');
  }, []);

  return (
    <div className="landing-page">
      <h1>Welcome to the Machine Learning Test App</h1>
      <div className="button-container">
        <button className="button-49" role="button" onClick={handleTakeTest}>
          Take a Test
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
