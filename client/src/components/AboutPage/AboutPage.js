import React from 'react';
import './AboutPage.css';
import Button from '../Buttons/Button';
import AboutPageHero from '../Hero/AboutPageHero';
export default function AboutPage() {
  return (
    <div className='aboutpage'>
      <AboutPageHero />
      <div className='about'>
        <h1 className='aboutheader'>About Page</h1>
        <Button onClick={() => {}} button='Lorem ipsum' />
      </div>
    </div>
  );
}
