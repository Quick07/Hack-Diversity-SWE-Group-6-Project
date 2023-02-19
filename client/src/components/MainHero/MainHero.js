import React from 'react';
import { Link } from 'react-router-dom';
import './MainHero.css';

export default function MainHero() {
  return <div className='MainHeroContainer'>
    <div>
  <h1 className='header'>welcome to advance x-ray</h1>
  </div>
  <div>
    <button><Link to='/IndexPage'>index</Link></button>
    <button><Link to='/AdminPage'>admin</Link></button>
  </div>
</div>;
}