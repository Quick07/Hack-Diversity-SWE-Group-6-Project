import React from 'react';
import { Link } from 'react-router-dom';
import './MainHero.css';
import Button from '../Buttons/Button';
export default function MainHero() {
  return (
    <div className='MainHeroContainer'>
      <h1 className='header'>welcome to project x</h1>
      <div className='MainHerobuttonContainer'>
        <Link to='/Exams'>
          {' '}
          <Button className='button' button='Exams' />
        </Link>

        <Link to='/Admin'>
          <Button className='button' button='Admin' />
        </Link>
      </div>
    </div>
  );
}
