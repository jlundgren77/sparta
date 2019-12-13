import React from 'react';
import SlideShow from './SlideShow';

import landing from '../images/landing.png';

const Hero = () => (
  <section className="hero">
    <SlideShow />
    <div className="hero-overlay">
      <div className="hero-overlay-text">
        <h1>
          Screening <br />
          DVF Secret Agent Part 2
        </h1>
        <h2>October 15, 2017</h2>
        <p>
          Join us for a private screening of DVF Secret Agent Part2 <br />
          with our special guest, director Peter Lindberg
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
