import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className='aboutpage'>
      <div className='aboutcontentcontainer'>
        <h1 className='aboutheader'>Contributors &#60; / &#62;</h1>
        <div>
          <h3 className='aboutheader2'>Titamah Simpson</h3>

          <h3 className='aboutheader2'>Luz Agudelo</h3>
          <h3 className='aboutheader2'>Donovan Francis</h3>
          <h3 className='aboutheader2'>Liban Osman</h3>
          <h3 className='aboutheader2'>Nick Johnson</h3>
          <h3 className='aboutheader2'>John Fleurimond</h3>

          <a
            className='Githubbtn'
            target='_blank'
            href='https://github.com/Quick07/Hack-Diversity-SWE-Group-6-Project'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
