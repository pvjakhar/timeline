import React from 'react';
import './hero.css';
import logo from './alt_logo.webp'; // Replace with your actual logo file

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="hero-text-logo" />
        </div>
        <h1>Our Milestones<br /></h1>
        {/* <p>Discover premium office spaces designed for productivity and growth.</p> */}
        {/* <button className="cta-button">Explore Properties</button> */}
      </div>
    </div>
  );
}
