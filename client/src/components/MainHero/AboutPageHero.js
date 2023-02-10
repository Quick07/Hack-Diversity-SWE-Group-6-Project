import React from 'react';
import { Animated } from 'react-animated-css';
import './MainHero.css';

export default function AboutPageHero() {
  return (
    <Animated
      animationIn='fadeInLeft'
      animationOut='zoomOutDown'
      animationInDuration={4000}
      animationOutDuration={1000}
      isVisible={true}
    >
    <div className='MainHeroContainer'>
      <h1 className='header'>Welcome to the About Page</h1>
    </div>
    </Animated>
    
  );
}
