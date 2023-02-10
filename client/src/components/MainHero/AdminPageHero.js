import React from 'react';
import './MainHero.css';
import { Animated } from 'react-animated-css';

export default function AdminPageHero() {
  return (
    <Animated
      animationIn='fadeInLeft'
      animationOut='zoomOutDown'
      animationInDuration={4000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <div className='MainHeroContainer'>
        <h1 className='header'>Welcome to the Admin Page</h1>
      </div>
    </Animated>
  );
}
