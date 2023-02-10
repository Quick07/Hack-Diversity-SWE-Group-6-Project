import React from 'react';
import { Animated } from 'react-animated-css';
import './MainHero.css';

export default function MainHero() {
  return (
    <Animated
      animationIn='bounceInLeft'
      animationOut='fadeOut'
      isVisible={true}
    >
      <div className='MainHeroContainer'>
        <h1 className='header'>Welcome to Advance X-Ray</h1>
      </div>
    </Animated>
  );
}
