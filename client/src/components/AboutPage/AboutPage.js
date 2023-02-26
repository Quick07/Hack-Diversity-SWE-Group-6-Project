import React from 'react';
import './AboutPage.css';
import Button from '../Buttons/Button';
export default function AboutPage() {
  return (
    <div className='aboutcontentcontainer'>
      <div>
        <h1 className='aboutheader'>Welcome to the About Page</h1>
        <h1 className='aboutheader2'>Contributors</h1>
        <h3 className='header'>John Fleurimond</h3>
        <h3 className='header'>Luz Agugelo</h3>
        <h3 className='header'>Donovan Francis</h3>
        <h3 className='header'>Liban Osman</h3>
        <h3 className='header'>Nick Johnson</h3>
        <h3 className='header'>Titamah Simpson</h3>
        <form
          action='https://github.com/Quick07/Hack-Diversity-SWE-Group-6-Project'
          method='get'
          target='_blank'
        >
          <Button button='Github' />
        </form>
      </div>
    </div>
  );
}
