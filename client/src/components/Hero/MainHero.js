import React from 'react';
import { Link } from 'react-router-dom';
import './MainHero.css';
import Button from '../Buttons/Button';
export default function MainHero() {
  return (
    <div className='MainHeroContainer'>
      <div>
        <h1 className='header'>welcome to advance x-ray</h1>
      </div>
      <div>
        <Link to='/ExamPage'>
          {' '}
          <Button className='button' button='Exams' />
        </Link>

        <Link to='/AdminPage'>
          <Button className='button' button='Admin' />
        </Link>
      </div>
    </div>
  );
}
