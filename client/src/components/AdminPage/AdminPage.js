import React from 'react';
import './AdminPage.css';
import { Link } from 'react-router-dom';

export default function AdminPage() {
  return (
    <div className='AdminPage'>
      <div>
        <h1>admin</h1>
        <h2>create and edit exam records.</h2>
      </div>
      <div>
        <Link to='/Admin/CreateExam'>
          <button className='adminButton'> create an exam</button>
        </Link>
        <Link to='/Admin/EditExam'>
          <button className='adminButton'> edit an exam</button>
        </Link>
      </div>
    </div>
  );
}
