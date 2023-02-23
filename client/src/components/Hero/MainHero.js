import React from 'react';
import { Link } from 'react-router-dom';
import './MainHero.css';

export default function MainHero() {
  return (
    <div className='MainHeroContainer'>
      <div>
        <h1 className='header'>welcome to advance x-ray</h1>
      </div>
      <div>
        <button>
          <Link to='/ExamPage'>Exams</Link>
        </button>
        <button>
          <Link to='/AdminPage'>Admin</Link>
        </button>
      </div>
    </div>
  );
}
