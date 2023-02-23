import React from 'react';
import { Link } from 'react-router-dom';
import './MainHero.css';
import Button from '../Buttons/Button'
export default function MainHero() {
  return (
    <div className='MainHeroContainer'>
      <div>
        <h1 className='header'>welcome to advance x-ray</h1>
      </div>
      <div>
        <Button>
          <Link to='/ExamPage'>Exams</Link>
        </Button>
        <Button>
          <Link to='/AdminPage'>Admin</Link>
        </Button>
      </div>
    </div>
  );
}
