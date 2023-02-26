import React from 'react';
import './AboutPage.css';
import Button from '../Buttons/Button';
export default function AboutPage() {
  return (
    <div className='aboutcontentcontainer'>
      <h1 className='aboutheader'>Contributors</h1>
      <div>
        <h3 className='aboutheader2'>John Fleurimond</h3>
        <h3 className='aboutheader2'>Luz Agugelo</h3>
        <h3 className='aboutheader2'>Donovan Francis</h3>
        <h3 className='aboutheader2'>Liban Osman</h3>
        <h3 className='aboutheader2'>Nick Johnson</h3>
        <h3 className='aboutheader2'>Titamah Simpson</h3>
      </div>
      <form
        action='https://github.com/Quick07/Hack-Diversity-SWE-Group-6-Project'
        method='get'
        target='_blank'
      >
        <Button button='Github' />
      </form>
    </div>
  );
}
