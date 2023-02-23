import React from 'react';
import './AdminPage.css';

export default function AdminPage() {
  return (
    <div className='AdminPage'>
      <div>
        <h1>admin</h1>
        <h2>create and edit exam records.</h2>
      </div>
      <div>
        <button className='adminButton'>create an exam</button>{' '}
        <button className='adminButton'> edit an exam</button>
      </div>
    </div>
  );
}
