import React from 'react';
import { Link } from 'react-router-dom';
import './MainHero.css';
export default function MainHero() {
  return (
    <div className='MainHeroContainer'>
      <h1 className='header'>welcome to project x</h1>
      <div className='MainHerobuttonContainer'>
        <Link to='/Exams'>
          {' '}
          <button className='button'>Exams</button>
        </Link>

        <Link to='/Admin'>
          <button className='button'> Admin</button>
        </Link>
      </div>
    </div>
  );
}
